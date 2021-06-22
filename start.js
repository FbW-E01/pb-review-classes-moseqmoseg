///1
class Component {
    constructor(name) {
        this.name = name;
    }

    render() {
        console.log(`<p> Component ${this.name} rendering`);
    }
}

///2
class UserCard extends Component {
    constructor(user) {
        super(user.name);
        this.user = user.name;
        this.image = user.imageUrl;
        this.email = user.email;
    }

    render() {
        console.log(` <div class="${this.user}">
    <img class="card-img-top" src=${this.image} alt>
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">To contact, please send a message to</p>
        <a
            href=${this.email}
            class="btn btn-primary"
        >
            ${this.email}
        </a>
    </div>
</div>
`);
    }
}

///3
const users = [{
        name: "Cleve",
        imageUrl: "http://alex.net",
        email: "Francesco93@hotmail.com",
    },
    {
        name: "Pasquale",
        imageUrl: "https://leora.org",
        email: "Pat_Schmitt@gmail.com",
    },
    {
        name: "Garfield",
        imageUrl: "http://leone.info",
        email: "Kale_Kutch76@yahoo.com",
    },
    {
        name: "Emmie",
        imageUrl: "http://eldora.name",
        email: "Thomas.Waelchi98@hotmail.com",
    },
    {
        name: "Lloyd",
        imageUrl: "http://marjorie.com",
        email: "Jakayla.Murray@gmail.com",
    },
];

///4
const mapper = object => new UserCard(object);

const userCards = users.map(mapper);
console.log(userCards);

///5
const renderedUsers = userCards.forEach((object) => object.render());
console.log(renderedUsers);

///6
console.log(typeof UserCard);
console.log(userCards[2] instanceof UserCard);

///7
console.log(typeof userCards[0]);