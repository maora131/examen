const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
    header{ 
        display: block;
        position: relative;
        width: 100%;
        z-index: 20;
    }

    nav {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #0a0a23;
    }

    ul {
    padding: 0;
    }
    
    ul li {
    list-style: none;
    display: inline;
    }
    
    a {
    font-weight: 700;
    margin: 0 25px;
    color: #fff;
    text-decoration: none;
    }
    
    a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #fff;
    }
</style>
<header>
    <nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html">Acerca de nosotros</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contact.html">Contacto</a></li>
    </ul>
    </nav>
</header>
`;

class Header extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
}
}

customElements.define('header-component', Header);