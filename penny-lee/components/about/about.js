class About {
  constructor(member) {
    this.member = member;
    this.expandBtn = member.querySelector('h3');
    this.content = member.querySelector('.team-content');
    this.expandBtn.addEventListener('click', () => {
      this.expand();
    });
  } 
  expand() {
    this.content.classList.toggle('team-hidden');
  }
}

let team = document.querySelectorAll('.team-card');

team.forEach(item => new About(item));
