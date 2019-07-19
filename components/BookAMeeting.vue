<template>
  <div class="book-a-meeting row">
    <h2>{{ services.bookAMeeting }}</h2>
    <div class="liner color-bg" />
    <form
      id="book-a-meeting-form"
      name="book-a-meeting"
      @submit.prevent="onSubmit"
    >
      <article class="col-md-6">
        <label for="firstname">First Name</label>
        <input
          id="book-a-meeting-firstname"
          v-model="firstname"
          type="text"
          :placeholder="services.firstname"
          name="firstname"
          size="100"
        >
      </article>
      <article class="col-md-6">
        <label for="lastname">{{ services.lastname }}</label>
        <input
          id="book-a-meeting-lastname"
          v-model="lastname"
          type="text"
          :placeholder="services.lastname"
          name="lastname"
          size="100"
        >
      </article>
      <article class="col-md-6">
        <label for="email">{{ services.email }}</label>
        <input
          id="book-a-meeting-email"
          v-model="email"
          type="email"
          :placeholder="services.email"
          name="email"
          size="30"
          required
        >
      </article>
      <article class="col-md-6">
        <label for="email">{{ services.phone }}</label>
        <input
          id="book-a-meeting-phone"
          v-model="phone"
          type="email"
          :placeholder="services.phone"
          name="email"
          size="30"
          required
        >
      </article>
      <article class="textarea-holder">
        <label for="msg">{{ services.message }}</label>
        <textarea
          id="msg"
          v-model="message"
          :placeholder="services.message"
          name="message"
          cols="40"
          rows="3"
        />
        <div class="btn-wrap  text-center">
          <button id="book-a-meeting-submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
            {{ services.buttonText }}
          </button>
        </div>
      </article>
    </form>
  </div>
</template>

<script>
import services from '../static/content/services.json'

export default {
  data() {
    return {
      services: services,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: ''
    }
  }
}
</script>

<style>
  .book-a-meeting h2 {
    font-size: 18px;
    font-weight: 500;
  }
  #book-a-meeting-form {
    box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
    border-radius: 5px;
    padding: 50px;
  }
  #book-a-meeting-form input {
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 49px;
  }
  #book-a-meeting-form ::placeholder {
    padding-left: 10px;
    font-size: 13px;
  }
  #book-a-meeting-form textarea {
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 8px;
  }
  #book-a-meeting-form .textarea-holder {
    width: 96%;
    margin: 0 auto;
  }
  .meeting-form .book-a-meeting .liner {
      text-align: left;
      margin-bottom: 50px;
  }
  #book-a-meeting-submit {
    width: 200px;
  }
  .book-a-meeting {
    display: flex;
    flex-direction: column;
    z-index: 10;
    background: #fff;
  }
  @media (max-width: 480px) {
    #book-a-meeting-form .textarea-holder {
    width: 100%;
    }
    #book-a-meeting-form article {
      padding: 0;
    }
    #book-a-meeting-form {
      padding: 20px;
    }
    .book-a-meeting {
      margin: 0 auto;
    }
  }
</style>
