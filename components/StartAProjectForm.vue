<template>
  <div id="start-a-project">
    <div class="container">
      <div class="row">
        <div class="main-caps text-center col-md-12 col-lg-10 col-lg-offset-1">
          <h2 class="dark main-caps project-top-header">
            <span>START A PROJECT</span>
          </h2>
          <div class="liner color-bg" />
          <p class="grey fill-form">
            Please fill in this form. We will contact you promptly to discuss the next steps.
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
              1 Hello, nice to meet you!
            </h3>
            <div class="project-contact-info">
              <article class="left">
                <input
                  id="projectCompany"
                  v-model="company"
                  type="text"
                  placeholder="Company"
                  name="company"
                  size="100"
                >
              </article>
              <article class="right">
                <input
                  id="projectEmail"
                  v-model="email"
                  type="email"
                  placeholder="Email Address*"
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
                  placeholder="Your Name*"
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
                  placeholder="Contact Number*"
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
                  placeholder="Website"
                  name="website"
                  size="100"
                >
              </article>
            </div>
          </section>
          <!-- <section>
            <h3>
              2 What is the scope of your project?
            </h3>
            <div class="project-services">
              <div v-for="(service, index) in services" :id="service.title" :key="index" class="service text-center" @click="addProjectType(service.title, $event)">
                <input type="hidden" :name="service.title" :value="service.title">
                <input type="image" :id="'startAProject' + service.title" :src="service.icon" :alt="service.title" :name="service.title">
                <h4>{{ service.title }}</h4>
              </div>
            </div>
          </section> -->
          <section>
            <h3>
              2 What is the scope of your project?
            </h3>
            <div class="project-services">
              <div id="project-form-logo" class="service text-center" @click="addProjectType('project-form-logo', $event)">
                <input type="checkbox" id="form-logo" name="Scope" value="Logo">
                <label for="form-logo"><img src="/images/icons/Services-Logo.png" alt="Logo" name="Logo" @click="addProjectType('project-form-logo', $event)"></label>
                <h4>LOGO</h4>
              </div>
              <div id="project-form-branding" class="service text-center" @click="addProjectType('project-form-branding', $event)">
                <input type="checkbox" id="form-branding" name="Scope" value="Branding">
                <label for="form-branding"><img src="/images/icons/Services-Branding.png" alt="Branding" name="Branding" @click="addProjectType('project-form-branding', $event)"></label>
                <h4>BRANDING</h4>
              </div>
              <div id="project-form-webDesign" class="service text-center" @click="addProjectType('project-form-webDesign', $event)">
                <input type="checkbox" id="form-webdesign" name="Scope" value="Web Design">
                <label for="form-webdesign"><img src="/images/icons/Services-WebDesign.png" alt="Web Design" name="Web Design" @click="addProjectType('project-form-webDesign', $event)"></label>
                <h4>WEB DESIGN</h4>
              </div>
              <div id="project-form-development" class="service text-center" @click="addProjectType('project-form-development', $event)">
                <input type="checkbox" id="form-development" name="Scope" value="Development">
                <label for="form-development"><img src="/images/icons/Services-Development.png" alt="Development" name="Development" @click="addProjectType('project-form-development', $event)"></label>
              <h4>DEVELOPMENT</h4>
              </div>
              <div id="project-form-printDesign" class="service text-center" @click="addProjectType('project-form-printDesign', $event)">
                <input type="checkbox" id="form-printdesign" name="Scope" value="Print Design">
                <label for="form-printdesign"><img src="/images/icons/Services-PrintDesign.png" alt="Print Design" name="Print Design" @click="addProjectType('project-form-printDesign', $event)"></label>
                <h4>PRINT DESIGN</h4>
              </div>
              <div id="project-form-consultation" class="service text-center" @click="addProjectType('project-form-consultation', $event)">
                <input type="checkbox" id="form-consultation" name="Scope" value="Consultation">
                <label for="form-consultation"><img src="/images/icons/Services-Consultation.png" alt="Consultation" name="Consultation" @click="addProjectType('project-form-consultation', $event)"></label>
                <h4>CONSULTATION</h4>
            </div>
            </div>
          </section>
          <section>
            <h3>
              3 When do you need the project to be completed?
            </h3>
            <input
              id="t1"
              v-model="timeframe"
              type="radio"
              name="timeframe"
              value="In a week"
            >
            <label for="t1">In a week</label><br>
            <input
              id="t2"
              v-model="timeframe"
              type="radio"
              name="timeframe"
              value="In a month"
            >
            <label for="t2">In a month</label><br>
            <input
              id="t3"
              v-model="timeframe"
              type="radio"
              name="timeframe"
              value="3 months +"
            >
            <label for="t3">3 months+</label><br>
          </section>
          <section>
            <h3>
              4 Tell us about your company and the goal of the project
            </h3>
            <article>
              <textarea id="projectMessage" placeholder="In less than 500 characters" name="message" cols="40" rows="4" />
            </article>
          </section>
          <section>
            <h3>
              5 How did you hear about us?
            </h3>
            <input
              id="h1"
              v-model="hearAboutUs"
              type="radio"
              name="hearAboutUs"
              value="Google"
            >
            <label for="h1">Google</label><br>
            <input
              id="h2"
              v-model="hearAboutUs"
              type="radio"
              name="hearAboutUs"
              value="Referral"
            >
            <label for="h2">Referral from a friend</label><br>
            <input
              id="h3"
              v-model="hearAboutUs"
              type="radio"
              name="hearAboutUs"
              value="Facebook"
            >
            <label for="h3">Facebook</label><br>
            <input
              id="h4"
              v-model="hearAboutUs"
              type="radio"
              name="hearAboutUs"
              value="LinkedIn"
            >
            <label for="h4">LinkedIn</label><br>
            <input
              id="h5"
              v-model="hearAboutUs"
              type="radio"
              name="hearAboutUs"
              value="Other"
              @change="otherSelected = !otherSelected"
            >
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
                Submit
              </button>
            </div>
          </article>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
