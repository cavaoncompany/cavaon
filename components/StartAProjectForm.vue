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
          action="/success"
          netlify-honeypot="bot-field"
          name="start-a-project"
          method="post"
          data-netlify="true"
          class="col-md-12 col-lg-10 col-lg-offset-1"
        >
          <section>
            <input type="hidden" name="form-name" value="startAProject">
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
                  id="projectName"
                  v-model="name"
                  type="text"
                  :placeholder="startaprojectform.namePlaceholder"
                  name="name"
                  size="100"
                  required
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
              <article class="left">
                <input
                  id="projectWebsite"
                  v-model="website"
                  type="url"
                  :placeholder="startaprojectform.websitePlaceholder"
                  name="website"
                  size="100"
                >
              </article>
            </div>
          </section>
          <section>
            <h3>
              {{ startaprojectform.projectScopeTitle }}
            </h3>
            <div class="project-services">
              <div v-for="(service, index) in startaprojectform.services" :id="'project-form-' + service.title" :key="index" class="service text-center" @click="addProjectType('project-form-' + service.title, $event)">
                <input :id="'form-' + service.title" type="checkbox" name="Scope" :value="service.title">
                <label :for="'form-' + service.title"><img :src="service.icon" :alt="service.title" :name="service.title" @click="addProjectType('project-form-' + service.title, $event)"></label>
                <h4>{{ service.title }}</h4>
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
              >
              <label for="'h' + index">{{ hear }}</label><br>
            </div>
            <label for="h5">Other</label><br>
            <input
              v-if="otherSelected"
              id="hearAboutUs"
              v-model="hearAboutUsOther"
              type="text"
              placeholder="Other"
              name="hearAboutUs"
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
import startaprojectform from '../content/startaprojectform.json'

export default {
  data() {
    return {
      services: [
        {
          icon: '/images/icons/Services-Logo.png',
          title: 'LOGO'
        },
        {
          icon: '/images/icons/Services-Branding.png',
          title: 'BRANDING'
        },
        {
          icon: '/images/icons/Services-WebDesign.png',
          title: 'WEB DESIGN'
        },
        {
          icon: '/images/icons/Services-Development.png',
          title: 'DEVELOPMENT'
        },
        {
          icon: '/images/icons/Services-PrintDesign.png',
          title: 'PRINT DESIGN'
        },
        {
          icon: '/images/icons/Services-Consultation.png',
          title: 'CONSULTATION'
        }
      ],
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
      otherSelected: false
    }
  },
  methods: {
    addProjectType: function (service, e) {
      if (this.projectType.indexOf(service) > -1) {
        const index = this.projectType.indexOf(service)
        if (index !== -1) {
          this.projectType.splice(index, 1)
        }
        document.getElementById(service).classList.remove('projectSelected')
        document.getElementById(service).classList.add('projectDeselected')
      } else {
        this.projectType.push(service)
        document.getElementById(service).classList.remove('projectDeselected')
        document.getElementById(service).classList.add('projectSelected')
      }
    }
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
  }
  #start-a-project h3 {
    margin-bottom: 35px;
    font-size: 18px;
    font-weight: 500;
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
  .service {
    border: 1px solid;
  }
  .service:hover {
    cursor: pointer;
  }
  .service img {
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
  .service h4 {
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
    border:1px solid #777;
    border-radius:50%;
    margin-right: 10px;
  }
  input[type=radio]:checked + label:before {
    background:#FFC716;
  }
</style>
