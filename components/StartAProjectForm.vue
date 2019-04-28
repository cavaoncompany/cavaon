<template>
  <div id="start-a-project">
    <div class="container">
      <div class="row">
        <div class="main-caps text-center col-md-12 col-lg-10 col-lg-offset-1">
          <h2 class="dark main-caps project-top-header">
            <span>{{ startaprojectform.title }}</span>
          </h2>
          <div class="liner color-bg" />
          <p class="grey fill-form">
            {{ startaprojectform.instruction }}
          </p>
        </div>
        <form
          id="startAProjectForm"
          @submit.prevent="onSubmit"
          class="col-md-12 col-lg-10 col-lg-offset-1"
        >
          <section>
            <input type="hidden" name="form-name" value="start-project">
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field"></label>
            </p>
            <h3>
              {{ startaprojectform.contactTitle }}
            </h3>
            <div class="project-contact-info">
              <article class="left">
                <input
                  id="projectCompany"
                  v-model="company"
                  type="text"
                  :placeholder="startaprojectform.companyPlaceholder"
                  name="company"
                  size="100"
                >
              </article>
              <article class="right">
                <input
                  id="projectEmail"
                  v-model="email"
                  type="email"
                  :placeholder="startaprojectform.emailPlaceholder"
                  name="email"
                  size="100"
                  required
                >
              </article>
              <article class="left">
                <input
                  id="projectFirstName"
                  v-model="firstname"
                  type="text"
                  :placeholder="startaprojectform.firstnamePlaceholder"
                  name="firstname"
                  size="100"
                  required
                >
              </article>
              <article class="right">
                <input
                  id="projectLastName"
                  v-model="lastname"
                  type="text"
                  :placeholder="startaprojectform.lastnamePlaceholder"
                  name="lastname"
                  size="100"
                  required
                >
              </article>
              <article class="left">
                <input
                  id="projectWebsite"
                  v-model="website"
                  type="text"
                  :placeholder="startaprojectform.websitePlaceholder"
                  name="website"
                  size="100"
                >
              </article>
              <article class="right">
              <input
                id="projectPhone"
                v-model="phone"
                type="tel"
                :placeholder="startaprojectform.telPlaceholder"
                name="phone"
                size="30"
                required
              >
              </article>
            </div>
          </section>
          <section>
            <h3>
              {{ startaprojectform.projectScopeTitle }}
            </h3>
            <div class="project-services">
              <div v-for="(service, index) in startaprojectform.services" :id="'project-form-' + service.title" :key="index" class="form-service text-center" @click="addProjectType(service, $event)">
                <img :id="'tick-' + service.title" :src="startaprojectform.tick" alt="ticked" class="tick invisible">
                <div class="project-services-content">
                  <input :id="'form-' + service.title" type="checkbox" name="Scope" :value="service.title">
                  <label :for="'form-' + service.title"><img :id="'img-' + service.title" :src="service.icon" :alt="service.title" :name="service.title" @click="addProjectType(service, $event)"></label>
                  <h4>{{ service.title }}</h4>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3>
              {{ startaprojectform.timeframeTitle }}
            </h3>
            <div v-for="(time, index) in startaprojectform.timeframe" :key="index">
              <input
                :id="'t' + index"
                v-model="timeframe"
                type="radio"
                name="timeframe"
                :value="time"
              >
              <label :for="'t' + index">{{ time }}</label><br>
            </div>
          </section>
          <section>
            <h3>
              {{ startaprojectform.goalTitle }}
            </h3>
            <article>
              <textarea id="projectMessage" :placeholder="startaprojectform.goalPlaceholder" name="message" cols="40" rows="4" />
            </article>
            <div v-if="brief !== ''" class="uploaded-files">
              <img :src="startaprojectform.yellowTick" alt="file uploaded">
              <p>{{ brief }}</p>
            </div>
            <input
              id="brief"
              ref="file"
              type="file"
              name="brief"
              @change="showUploadedFile($event)"
            >
            <label for="brief">
              <i class="fa fa-upload" />
              {{ startaprojectform.goalUploadButtonText }}
            </label>
            <p class="inline">
              {{ startaprojectform.goalMaxLength }}
            </p>
          </section>
          <section>
            <h3>
              {{ startaprojectform.hearAboutUsTitle }}
            </h3>
            <div v-for="(hear, index) in startaprojectform.hearAboutUs" :key="index">
              <input
                :id="'h' + index"
                v-model="hearAboutUs"
                type="radio"
                name="hearAboutUs"
                :value="hear"
                @change="checkIfOther(hear)"
              >
              <label :for="'h' + index">{{ hear }}</label><br>
            </div>
            <input
              v-if="otherSelected"
              id="hearAboutUs"
              v-model="hearAboutUsOther"
              type="text"
              placeholder="Other"
              name="hearAboutUsOther"
              size="100"
            >
          </section>
          <article>
            <div class="btn-wrap  text-center">
              <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
                {{ startaprojectform.buttonText }}
              </button>
            </div>
          </article>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import startaprojectform from '../static/content/startaprojectform.json'

export default {
  name: 'StartAProjectForm',
  data() {
    return {
      startaprojectform: startaprojectform,
      company: '',
      email: '',
      name: '',
      phone: '',
      website: '',
      projectType: [],
      timeframe: '',
      projectDescription: '',
      hearAboutUs: '',
      hearAboutUsOther: '',
      otherSelected: false,
      brief: '',
      briefPath: '',
      file: {}
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  computed: mapState(['projectTicketCreatedStatus']),
  watch: {
    projectTicketCreatedStatus(newValue, oldValue) {
      if(newValue === 'success') {
        this.$router.replace({ path: 'success' })
      }
    }
  },
  methods: {
    addProjectType: function (data, e) {
      const service = 'project-form-' + data.title
      const img = 'img-' + data.title
      const tick = 'tick-' + data.title
      if (this.projectType.indexOf(service) > -1) {
        const index = this.projectType.indexOf(service)
        if (index !== -1) {
          this.projectType.splice(index, 1)
        }
        document.getElementById(img).src = data.icon
        document.getElementById(service).classList.remove('projectSelected')
        document.getElementById(service).classList.add('projectDeselected')
        document.getElementById(tick).classList.add('invisible')
      } else {
        this.projectType.push(service)
        document.getElementById(img).src = data.yellowIcon
        document.getElementById(service).classList.remove('projectDeselected')
        document.getElementById(service).classList.add('projectSelected')
        document.getElementById(tick).classList.remove('invisible')
      }
    },
    checkIfOther: function (value) {
      if (value.toLowerCase() === 'other') {
        this.otherSelected = true
      } else {
        this.otherSelected = false
      }
    },
    showUploadedFile: function(e) {
      this.file = this.$refs.file.files[0]
      const file = e.target.files[0]
      this.brief = file.name
      if (!file) {
        return
      }
      this.briefPath = this.createFile(file)
    },
    createFile: function(file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        this.file = e.target.result
      }
      reader.readAsDataURL(file)
    },
    sendEmail () {
      const projects = []
      for (let i = 0; i < this.projectType.length; i++){
        projects.push(this.projectType[i].replace('project-form-', ''))
      }
      const emailData = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        company: this.company,
        phone: this.phone,
        website: this.website,
        projectType: projects,
        timeframe: this.timeframe,
        projectDescription: this.projectDescription,
        hearAboutUs: this.hearAboutUs,
        hearAboutUsOther: this.hearAboutUsOther,
        brief: this.brief,
        file: this.file,
        briefPath: this.briefPath
      }
      this.$store.dispatch('newProject', emailData)
      this.name = ''
      this.email = ''
      this.company = ''
      this.phone = ''
      this.website = ''
      this.projectType = ''
      this.timeframe = ''
      this.projectDescription = ''
      this.hearAboutUs = ''
      this.hearAboutUsOther = ''
      this.brief = ''
      this.file = ''
      this.briefPath = ''
      this.$router.replace({ path: 'success' })
    },
    createTicket () {
      const projects = []
      for (let i = 0; i < this.projectType.length; i++){
        projects.push(this.projectType[i].replace('project-form-', ''))
      }
      const ticketData = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        company: this.company,
        phone: this.phone,
        website: this.website,
        projectType: projects,
        timeframe: this.timeframe,
        projectDescription: this.projectDescription,
        hearAboutUs: this.hearAboutUs,
        hearAboutUsOther: this.hearAboutUsOther,
        brief: this.brief,
        file: this.file,
        briefPath: this.briefPath
      }
      this.$store.dispatch('startAProjectTicket', ticketData)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.createTicket()
        this.sendEmail()
      } catch (error) {
        console.log('Submission error:', error)
      }
    },
  }
}
</script>

<style>
  #start-a-project {
    height: vh100;
    padding-top: 70px;
    padding-bottom: 30px;
  }
  #start-a-project label {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 14px;
  }
  #start-a-project h2 {
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 500;
  }
  #start-a-project h3 {
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
  #start-a-project section {
    margin-top: 35px;
    margin-bottom: 50px;
  }
  .project-contact-info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 70px;
  }
  .fill-form {
    margin-top: 17px;
  }
  .project-contact-info input {
    height: 60px;
    margin-top: 15px;
  }
  .project-services {
    display: flex;
    flex-wrap: wrap;
  }
  .form-service {
    border: 1px solid #E2E2E2;
    position: relative;
  }
  .form-service:hover {
    cursor: pointer;
  }
  .form-service img {
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
    border: none;
  }
  #start-a-project input[type="checkbox"] {
    width: 0;
    visibility: hidden;
  }
  .form-service h4 {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
  #start-a-project input[type="radio"] {
    width: 0px;
    margin-top: 8px;
    vertical-align: middle;
    visibility: hidden;
    position: absolute;
  }
  input[type=radio] + label:before {
    height:12px;
    width:12px;
    margin-right: 2px;
    content: " ";
    display:inline-block;
    vertical-align: baseline;
    border:1px solid #E2E2E2;
    border-radius:50%;
    margin-right: 10px;
  }
  input[type=radio]:checked + label:before {
    background:#FFC716;
  }
  #hearAboutUs {
    border-color: #E2E2E2;
  }
  #projectMessage {
    border-color: #E2E2E2;
  }
  #brief {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  #brief + label {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    background-color: transparent;
    border: 1px solid #FFC716;
    display: inline-block;
    cursor: pointer;
    padding: 8px;
    margin-top: 10px;
  }
  #brief:focus + label,
  #brief + label:hover {
    background-color: #FFC716;
    color: #FFF;
  }
  .project-services .tick {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10px;
  }
  .inline {
  display: inline;
  }
  .invisible {
    opacity: 0;
  }
  .uploaded-files {
    display: flex;
  }
  .uploaded-files p {
    margin-top: 11px;
  }
</style>
