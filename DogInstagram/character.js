class dogCharacter {
    constructor(data) {
      Object.assign(this, data);
    }
  
    getDogcharacter() {
      const { name, age, avatar, bio } = this;
      return `<img class="main-img" src="${avatar}" alt="" />
          <p class="main-info">${name}, ${age}</p>
          <p class="bio">${bio}</p>`;
    }
  }
  
  export default dogCharacter;
  