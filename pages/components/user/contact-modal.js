/**
 * A modal with a contact form, used to contact a photographer
 */
export class ContactModal extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
    }
 
    /**
     * Insert a form template, then call listenOpenModal() & ListenCloseModal() & confirmForm()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="hidden fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50" >
            <section class="block max-w-lg w-full mx-auto mt-20 px-8 py-4 bg-tertiary opacity-100 z-20 rounded-md">
                <div class="flex">
                    <h1 class=" text-4xl flex-grow">
                        Contactez moi
                    </h1>
                    <button class="closeModal text-white text-4xl">
                        x
                    </button>
                </div>
                <form class="pt-4">
                    <label for="firstname">
                        Prénom
                        <input id="firstname" type="text" name="Prénom">
                        </input>
                    </label>
                    <label for="lastname">
                        Nom
                        <input id="lastname" type="text" name="Nom de famille">
                        </input>
                    </label>
                    <label for="email">
                        Email
                        <input id="email" type="email" name="Email">
                        </input>
                    </label>
                    <label for="messageText">
                        Votre message
                        <textarea id="messageText" class="h-32" name="Votre message"></textarea>
                    </label>
                    <button class="confirmContact button mt-4" type="submit" aria-label="Envoyer">
                        Envoyer
                    </button>
                </form>
            </section>
        </div>
        `;
        this.appendChild(template.content);
        this.listenOpenModal();
        this.listenCloseModal();
        this.confirmForm();
    }
    
    /**
     * Listen the modal button and make the modal appears on click 
     */
    listenOpenModal() {
        document.querySelector(".contactModal").addEventListener('click', () => {
            this.querySelector("div").style.display = "block";
        })
    }

    /**
     * Listen the close button in the modal, and close the modal on click
     */
    listenCloseModal() {
        this.querySelector(".closeModal").addEventListener('click', () => {
            this.querySelector("div").style.display = "none";
        })
    }

    /**
     * Listen for confirm, on click print the message and close the modal
     */
    confirmForm() {
        this.querySelector(".confirmContact").addEventListener('click', confirm => {
            // prevent the link for reloading the page
            confirm.preventDefault();

            // create an object with all the message's data
            let message = {};
            let inputs = this.querySelectorAll("input");
            message.author = inputs[0].value + " " + inputs[1].value;
            message.email = inputs[2].value;
            message.date = new Date().toLocaleDateString();
            message.content = this.querySelector("textarea").value;

            //  print the message on the console
            console.table(message);

            // reset and close the modal
            inputs.forEach(input => {input.value = ""});
            this.querySelector("textarea").value = "";
            this.querySelector("div").style.display = "none";
        })
    }
}

