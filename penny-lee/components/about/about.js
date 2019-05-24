class About {
  constructor(member) {
    this.member = member;
    this.expandBtn = document.createElement('div');
    this.expandBtn.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    member.querySelector('h3').appendChild(this.expandBtn);
    this.expandBtn.setAttribute('style', 'display: inline; margin-left: 2rem; cursor: pointer');
    this.content = member.querySelector('.team-content');
    this.expandBtn.addEventListener('click', () => {
      this.expand();
    });
    this.closeBtn = document.createElement('div');
    this.closeBtn.innerHTML = `<i class="fas fa-times"></i>`;
    this.member.appendChild(this.closeBtn);
    this.closeBtn.setAttribute('style', 'display: none; font-size: 2.4rem; cursor: pointer');
    this.closeBtn.addEventListener('click', () => {
      this.close();
    })
  } 
  expand() {
    this.content.classList.remove('team-hidden');
    this.closeBtn.style.display = 'block';
  }

  close() {
    this.content.classList.add('team-hidden');
    this.closeBtn.style.display = 'none';
  }
}

let team = document.querySelectorAll('.team-card');

team.forEach(item => new About(item));
