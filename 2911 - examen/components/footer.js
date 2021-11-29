const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
    footer {
    height: 60px;
    list-style: none;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #dfdfe2;
    position: absolute;
    width: 100%;
    z-index: 20;
    }

    ul {
    padding: 0;
    }
    
    ul li {
    list-style: none;
    display: inline;
    }
    
    a {
    margin: 0 15px;
    color: inherit;
    text-decoration: none;
    }
    
    a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
    font-size: 20px;
    }
    
    .social-row li a {
    margin: 0 15px;
    }
</style>
<footer>
    <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="about.html">Acerca de nosotros</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="contact.html">Contacto</a></li>
    </ul>
    <ul class="social-row">
    <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
    <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
</footer>
`;

class Footer extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
    shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
}
}

customElements.define('footer-component', Footer);