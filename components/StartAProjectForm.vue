<template>
  <div id="start-a-project">
    <div class="container">
      <div class="row">
        <div class="main-caps text-center col-md-12 col-lg-10 col-lg-offset-1">
          <h2 class="dark main-caps project-top-header">
            <span>START A PROJECT</span>
          </h2>
          <div class="liner color-bg" />
          <p class="grey fill-form">Please fill in this form. We will contact you promptly to discuss the next steps.</p>
        </div>
        <form id="startAProjectForm" action="/" netlify-honeypot="bot-field" name="startAProject" method="post" data-netlify="true" class="col-md-12 col-lg-10 col-lg-offset-1">
          <section>
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <h3>
              1 Hello, nice to meet you!
            </h3>
            <div class="project-contact-info">
              <article class="left" >
                <input id="projectCompany" v-model="company" type="text" placeholder="Company" name="company" size="100">
              </article>
              <article class="right">
                <input id="projectEmail" v-model="email" type="text" placeholder="Email Address" name="email" size="100">
              </article>
              <article class="left">
                <input id="projectName" v-model="name" type="text" placeholder="Your Name" name="name" size="100">
              </article>
              <article class="right">
                <input id="projectPhone" v-model="phone" type="text" placeholder="Contact Number" name="phone" size="30">
              </article>
              <article class="left">
                <input id="projectWebsite" v-model="website" type="text" placeholder="Website" name="website" size="100">
              </article>
            </div>
          </section>
          <section>
            <h3>
              2 What is the scope of your project?
            </h3>
            <div class="project-services">
              <div v-for="(service, index) in services" :key="index" :id="service.title" class="service text-center" @click="addProjectType(service.title, $event)">
                <img :src="service.icon" :alt="service.title">
                <h4>{{ service.title }}</h4>
              </div>
            </div>
          </section>
          <section>
            <h3>
              3 When do you need the project to be completed?
            </h3>
            <input type="radio" v-model="timeframe" id="t1" name="timeframe" value="In a week">
            <label for="t1">In a week</label><br>
            <input type="radio" v-model="timeframe" id="t2" name="timeframe" value="In a month">
            <label for="t2">In a month</label><br>
            <input type="radio" v-model="timeframe" id="t3" name="timeframe" value="3 months +">
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
            <input type="radio" v-model="hearAboutUs" id="h1" name="hearAboutUs" value="Google">
            <label for="h1">Google</label><br>
            <input type="radio" v-model="hearAboutUs" id="h2" name="hearAboutUs" value="Referral">
            <label for="h2">Referral from a friend</label><br>
            <input type="radio" v-model="hearAboutUs" id="h3" name="hearAboutUs" value="Facebook">
            <label for="h3">Facebook</label><br>
            <input type="radio" v-model="hearAboutUs" id="h4" name="hearAboutUs" value="LinkedIn">
            <label for="h4">LinkedIn</label><br>
            <input type="radio" v-model="hearAboutUs" id="h5" name="hearAboutUs" value="Other" @change="otherSelected = !otherSelected">
            <label for="h5">Other</label><br>
            <input id="hearAboutUs" v-model="hearAboutUsOther" v-if="otherSelected" type="text" placeholder="Other" name="hearAboutUs" size="100">
          </section>
          <article>
            <div class="btn-wrap  text-center">
              <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit" @click="submit()">
                Submit
              </button>
              <input type="hidden" name="startAProject" value="startAProject" />
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
    addProjectType: function(service, e) {
      if (this.projectType.indexOf(service) > -1) {
        const index = this.projectType.indexOf(service)
        if (index !== -1) {
          this.projectType.splice(index, 1);
        }
        document.getElementById(service).classList.remove('projectSelected')
      }
      else { 
        this.projectType.push(service)
        console.log(e.target.value)
        document.getElementById(service).classList.add('projectSelected')
        }
    },
    submit: function() {
      console.log(this.company, this.email, this.name, this.phone, this.website, this.projectType, this.timeFrame, this.projectDescription, this.hearAboutUs, this.hearAboutUsOther)
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
  #start-a-project input[type="radio"] {
    width: 20px;
    height: 20px !important;
    margin-top: 8px;
    vertical-align: middle;
    margin-right: 10px
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
    height: 60px!important;
    margin-top: 15px;
  }
  .project-services {
    display: flex;
    flex-wrap: wrap;
  }
  .service {
    border: 1px solid;
    margin: 8px;
    padding: 20px;
  }
  
  .service img {
    margin-left: auto;
    margin-right: auto;
    width: 100px;
  }
  .service h4 {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
</style>
