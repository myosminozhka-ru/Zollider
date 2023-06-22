<template>
  <form
    class="form"
    id="form-register"
    ref="formRegister"
    @submit.prevent="submit"
  >
    <div class="form__item">
      <label for="name" class="form__label">ФИО*</label>
      <input
        type="text"
        id="name"
        name="name"
        class="form__input"
        placeholder="Иванов Иван Иванов"
      />
    </div>
    <div class="form__item">
      <label for="age" class="form__label">Возраст заявителя*</label>
      <input
        type="text"
        id="age"
        name="age"
        class="form__input"
        placeholder="18"
      />
    </div>
    <div class="form__item">
      <label for="email" class="form__label">E-mail*</label>
      <input
        type="text"
        id="email"
        name="email"
        class="form__input"
        placeholder="E-mail*"
        role="email"
        aria-label="email"
      />
    </div>
    <div class="form__item">
      <label for="tel" class="form__label">Телефон*</label>
      <input
        type="tel"
        id="tel"
        name="tel"
        class="form__input"
        placeholder="+7(___) ___-__-__"
      />
    </div>
    <div class="form__item form__item--file">
      <div class="form__file">
        <label class="form__file-input">
          <input
            type="file"
            id="check"
            name="check"
            class="visually-hidden"
            accept="image/png, image/jpeg, image/jpg, image/heic"
            required
          />
          Приложить фотографию чека
          <span class="checked"></span>
        </label>
        <div class="form__file-label">
          Вы можете загрузить 1 фото в формате png, jpg, jpeg размером не более
          10 МБайт на один файл.
        </div>
      </div>
    </div>
    <div class="form__item form__item--textarea">
      <label for="family" class="form__label">Расскажите о вашей семье*</label>
      <textarea
        class="form__textarea"
        name="family"
        id="family"
        cols="30"
        rows="10"
        placeholder="Что-то интересное, забавное или значительное, характеризующее вас"
      ></textarea>
    </div>
    <div class="form__item form__item--textarea">
      <label for="comment" class="form__label">
        Что планируете ремонтировать и как?
      </label>
      <textarea
        class="form__textarea"
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Почему именно ваша заявка достойна сертификата?"
      ></textarea>
    </div>
    <div class="form__item form__item--file">
      <div class="form__file">
        <label class="form__file-input">
          <input
            type="file"
            id="img"
            name="img"
            class="visually-hidden"
            accept="image/png, image/jpeg, image/jpg, image/heic"
            required
            multiple
          />
          Приложить фотографии
          <span class="checked"></span>
        </label>
        <div class="form__file-label">
          Вы можете загрузить 3 фото в формате png, jpg, jpeg размером не более
          10 МБайт на один файл.
        </div>
      </div>
    </div>
    <div class="form__item form__item--submit">
      <button
        class="btn btn--accent form__submit"
        :disabled="loading || !this.validation?.isValid"
        type="submit"
      >
        Оставить завку
      </button>
      <button
        class="btn btn--accent form__submit"
        type="button"
        @click="refresh"
      >
        refresh
      </button>
    </div>
    <div class="form__item form__item--privacy">
      <div class="form__conf">
        <label class="form__check">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            class="visually-hidden"
          />
          <span></span>
        </label>
        <div>
          Я даю согласие на обработку моих
          <a href="/files/politika-konfidencialnosti.pdf" download="politika-konfidencialnosti.pdf">персональных данных</a>
        </div>
      </div>
    </div>
    <div
      v-if="msg === true || msg === false"
      class="form__item form__item--msg"
    >
      <div v-if="msg === true" class="form__success">
        Спасибо, ваше сообщение отправлено
      </div>
      <div v-if="msg === false" class="form__error">
        Возникла ошибка отправки, попробуйте позже
      </div>
    </div>
  </form>
</template>
<script>
import JustValidate from 'just-validate'
import validationLocal from '@/validate/validationLocal.js'
const { keys, dictLocale } = validationLocal

export default {
  data() {
    return {
      loading: false,
      msg: null,
      validation: null,
      courses: [],
    }
  },
  methods: {
    init() {
      if (!document.querySelector('#form-register')) return
      const validation = new JustValidate(
        '#form-register',
        {
          validateBeforeSubmitting: true,
          tooltip: {
            position: 'top',
          },
        },
        dictLocale,
      )
      validation.setCurrentLocale('ru')
      validation
        .addField('[name="name"]', [
          {
            rule: 'minLength',
            value: 2,
            errorMessage: keys.minLength,
          },
          {
            rule: 'maxLength',
            value: 30,
            errorMessage: keys.maxLength,
          },
          {
            rule: 'required',
            errorMessage: keys.required,
          },
          {
            rule: 'customRegexp',
            value: /^[a-zA-Zа-яА-Я'-]+ [a-zA-Zа-яА-Я'-]+ ?[a-zA-Zа-яА-Я'-]*$/gi,
            errorMessage: keys.name,
          },
        ])
        .addField('[name="age"]', [
          {
            rule: 'required',
            errorMessage: keys.required,
          },
          {
            rule: 'integer',
            errorMessage: keys.integer,
          },
          {
            rule: 'minNumber',
            value: 18,
            errorMessage: keys.ageMin,
          },
          {
            rule: 'maxNumber',
            value: 100,
            errorMessage: keys.ageMax,
          },
        ])
        .addField('[name="tel"]', [
          {
            rule: 'required',
            errorMessage: keys.required,
          },
          {
            rule: 'customRegexp',
            value: /^\+7 (\d|-){13}/gi,
            errorMessage: keys.tel,
          },
        ])
        .addField('[name="email"]', [
          {
            rule: 'required',
            errorMessage: keys.emailRequired,
          },
          {
            rule: 'customRegexp',
            value: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я]{2,}))$/gi,
            errorMessage: keys.email,
          },
        ])
        .addField('[name="family"]', [
          {
            rule: 'required',
            errorMessage: keys.required,
          },
          {
            rule: 'minLength',
            value: 2,
            errorMessage: keys.minLength,
          },
          {
            rule: 'maxLength',
            value: 2000,
            errorMessage: keys.maxLength,
          },
        ])
        .addField('[name="comment"]', [
          {
            rule: 'required',
            errorMessage: keys.required,
          },
          {
            rule: 'minLength',
            value: 2,
            errorMessage: keys.minLength,
          },
          {
            rule: 'maxLength',
            value: 2000,
            errorMessage: keys.maxLength,
          },
        ])
        .addField('[name="privacy"]', [
          {
            rule: 'required',
            errorMessage: keys.required,
          },
        ])
        .addField('[name="check"]', [
          {
            rule: 'minFilesCount',
            value: 1,
            errorMessage: 'Фотография не выбрана',
          },
          {
            rule: 'files',
            value: {
              files: {
                extensions: ['jpeg', 'jpg', 'png', 'HEIC', 'heic'],
                maxSize: 10000000,
                minSize: 100,
                types: [
                  'image/jpeg',
                  'image/jpg',
                  'image/png',
                  'image/HEIC',
                  'image/heic',
                ],
              },
            },
            errorMessage: 'Неверный формат или размер файла больше 10МБ',
          },
        ])
        .addField('[name="img"]', [
          {
            rule: 'minFilesCount',
            value: 1,
            errorMessage: 'Фотография не выбрана',
          },
          {
            rule: 'maxFilesCount',
            value: 3,
            errorMessage: 'Не более 3 фото',
          },
          {
            rule: 'files',
            value: {
              files: {
                extensions: ['jpeg', 'jpg', 'png', 'HEIC', 'heic'],
                maxSize: 10000000,
                minSize: 100,
                types: [
                  'image/jpeg',
                  'image/jpg',
                  'image/png',
                  'image/HEIC',
                  'image/heic',
                ],
              },
            },
            errorMessage: 'Неверный формат или размер файла больше 10МБ',
          },
        ])
      return validation
    },
    submit() {
      console.log('submit start')
      if (!this.validation?.isValid) {
        console.log('no valid')
        return
      }
      const formData = new FormData(this.$refs.formRegister)
      this.fetchtest(formData)
    },
    refresh() {
      this.$refs.formRegister.reset()
      this.validation.refresh()
      this.validation.setCurrentLocale('ru')
      this.msg = null
      const inputs = document.querySelectorAll('input[type="tel"]')
      const instances = []
      inputs.forEach(el => {
        instances.push(
          IMask(el, {mask: '+{7 }000-000-00-00'})
        )
      })
    },
    async fetchtest(formData) {
      this.msg = null
      this.loading = true
      const r = await this.$axios({
        method: 'post',
        url: '/api',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          //handle success
          this.msg = true
          console.log(response)
          setTimeout(() => {
            this.refresh()
          }, 7000)
        })
        .catch((response) => {
          //handle error
          this.msg = false
          console.log(response)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  mounted() {
    if (process.client) {
      this.validation = this.init()
    }
  },
}
</script>
<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.4rem 4.1rem;
  align-items: center;
  &__item {
    position: relative;
    ::v-deep .just-validate-error-label[data-tooltip=true] {
      position: absolute !important;
      top: auto !important;
      left: 50% !important;
      bottom: 100% !important;
      transform: translate(-50%, 2rem) !important;
    }
    &--file,
    &--textarea,
    &--msg {
      grid-column: 1/3;
    }
    &--file {
      padding: 1.1rem 0;
    }
    &--textarea {
      margin-top: -0.1rem;
    }
    &--file ::v-deep .just-validate-error-label[data-tooltip=true] {
      transform: translate(0, 2rem) !important;
      left: 0 !important;
    }
    &--privacy ::v-deep .just-validate-error-label[data-tooltip=true] {
      transform: translate(0, 0rem) !important;
      left: 0 !important;
    }
  }
  &__label {
    display: block;
    margin-bottom: 0.8rem;
  }
  &__input,
  &__textarea {
    width: 100%;
    font-size: 1.8rem;
    color: $dark-text;
    padding: 1.5rem 2.4rem;
    background-color: #fff;
    border: 1px solid #fff;
    background-repeat: no-repeat;
    background-size: 2.4rem;
    background-position: center right 2.4rem;
    &:focus {
      border: 1px solid #3c3c3b;
    }
    &.just-validate-error-field {
      border: 1px solid #aa182c;
      background-image: url(@/assets/ico/field-error.svg);
    }
    &.just-validate-success-field {
      border: 1px solid #007934;
      background-image: url(@/assets/ico/done-green.svg);
    }
    &::placeholder {
      color: #8c9091;
    }
  }
  &__textarea {
    height: 9rem;
  }
  &__file {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.4rem;
    &-input {
      padding-left: 4rem;
      background-image: url(@/assets/ico/file.svg);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 2.2rem;
      font-weight: 700;
      cursor: pointer;
      .checked {
        display: none;
        width: 2.4rem;
        height: 2.4rem;
        background-repeat: no-repeat;
      }
      .just-validate-success-field ~ .checked {
        display: inline-block;
        background-image: url(@/assets/ico/done-green.svg);
      }
      .just-validate-error-field ~ .checked {
        display: inline-block;
        background-image: url(@/assets/ico/field-error.svg);
      }
    }
  }
  &__submit {
    width: 100%;
  }
  &__conf {
    display: flex;
    align-items: center;
    a {
      text-decoration: underline;
    }
  }
  &__check {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-right: 1.6rem;
    cursor: pointer;
    span {
      display: inline-block;
      width: 1.8rem;
      height: 1.8rem;
      border: 1px solid $light-bg;
    }
    input:checked + span {
      background-image: url(@/assets/ico/done.svg);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__success {
    font-size: 2.6rem;
    color: #007934;
  }
  &__error {
    font-size: 2.6rem;
    color: #aa182c;
  }
  @include mob {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.6rem;
    &__item {
      ::v-deep .just-validate-error-label[data-tooltip=true] {
        font-size: 1.3rem;
      }
      &--file,
      &--textarea,
      &--msg {
        grid-column: 1/2;
      }
      &--submit {
        order: 100;
      }
      &--file {
        padding: 0.2rem 0;
      }
      &--file ::v-deep .just-validate-error-label[data-tooltip=true] {
        transform: translate(0, 0) !important;
      }
    }
    &__label {
      font-size: 1.4rem;
    }
    &__input {
      font-size: 1.4rem;
      padding: 1.2rem 2.4rem;
    }
    &__textarea {
      height: 6.8rem;
      font-size: 1.4rem;
      padding: 1.2rem 2.4rem;
    }
    &__file {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.6rem;
      &-input {
        font-size: 1.4rem;
      }
      &-label {
        font-size: 1.4rem;
      }
    }
    &__submit {
      width: 100%;
    }
    &__conf {
      font-size: 1.4rem;
    }
  }
}
</style>
