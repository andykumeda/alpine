<template>
  <div class="max-w-md mx-auto my-8 dark">
    <h1 class="text-3xl font-bold mb-4">Contact</h1>

    <div class="ml-5">
      <div class="flex items-center">
        <Icon name="mdi:phone-classic" />
        <a href="tel:3104931793" class="ml-2 dark:text-white hover:underline dark:hover:text-blue-300 hover:text-blue-300">Phone</a>
      </div>
      <div class="flex items-center mt-2">
        <Icon name="mdi:email" />
        <a href="mailto:0xandyk@gmail.com" class="ml-2 dark:text-white hover:underline dark:hover:text-blue-300 hover:text-blue-300">Email</a>
      </div>
      <div class="flex items-center mt-2">
        <Icon name="mdi:telegram" />
        <a href="https://t.me/andyk3406" class="ml-2 dark:text-white hover:underline dark:hover:text-blue-300 hover:text-blue-300">Telegram</a>
      </div>
      <div class="flex items-center mt-2">
        <Icon name="mdi:chat" />
        <a href="sms:3104931793" class="ml-2 dark:text-white hover:underline dark:hover:text-blue-300 hover:text-blue-300">Chat</a>
      </div>
    </div>

    <p class="my-4 text-xl font-bold">Send me a message!</p>

    <form
      class="bg-gray-200 outline p-6 rounded-lg shadow-md outline-gray-500"
      accept-charset="UTF-8"
      action="https://formspree.io/f/mzbqwbql"
      method="POST"
    >
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
        <input
          class="dark:text-black input input-bordered input-primary w-full py-2 px-3 leading-tight focus:outline-none bg-white"
          style="border-color: black;"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
        <input
          class="dark:text-black input input-bordered input-primary w-full py-2 px-3 leading-tight focus:outline-none bg-white"
          style="border-color: black;"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
        <textarea
          class="dark:text-black textarea textarea-primary w-full py-2 px-3 leading-tight focus:outline-none bg-white"
          style="border-color: black;"
          name="message"
          id="message"
          rows="5"
          cols="25"
          required
        ></textarea>
      </div>

      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>

    </form>
  </div>
</template>

