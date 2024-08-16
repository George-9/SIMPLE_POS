import { CREATE_ELEMENT, GET_ELEMENT_BY_ID } from "./components/dom_util.js";
import { MODAL_EXPERTISE } from "./components/modal.js";

document.addEventListener('DOMContentLoaded', Main);

function Main() {
    GET_ELEMENT_BY_ID('add-route').onclick = function (ev) {
        ev.preventDefault();

        const regDiv = CREATE_ELEMENT('div');
        regDiv.classList.add('flex-column', 'a-c');
        regDiv.style.paddingTop = '20%';
        regDiv.style.padding = '10px';

        const routeNameE = CREATE_ELEMENT('input');
        routeNameE.placeholder = 'route name';

        const regButton = CREATE_ELEMENT('button');
        regButton.style.marginTop = '20px';
        regButton.innerText = 'register';

        // const lorerumPar = CREATE_ELEMENT('p');
        // lorerumPar.style.color = 'black';
        // lorerumPar.innerText = 'Lorem ipsum dolor sit amet' +
        //     'consectetur adipisicing elit. Earum harum eaque dolores laudantium.' +
        //     'Incidunt tempora vitae blanditiis cumque veniam repellat asperiores, maiores aut aperiam. Sed iste natus tempora nihil eum.' +
        //     'Lorem ipsum dolor sit amet' +
        //     'consectetur adipisicing elit. Earum harum eaque dolores laudantium.' +
        //     'Incidunt tempora vitae blanditiis cumque veniam repellat asperiores, maiores aut aperiam. Sed iste natus tempora nihil eum.' +
        //     'Lorem ipsum dolor sit amet' +
        //     'consectetur adipisicing elit. Earum harum eaque dolores laudantium.' +
        //     'Incidunt tempora vitae blanditiis cumque veniam repellat asperiores, maiores aut aperiam. Sed iste natus tempora nihil eum.'


        regDiv.append(routeNameE, regButton);
        regDiv.style.color = 'white';

        MODAL_EXPERTISE.ShowModal('add route',
            regDiv,
            {
                'headingColor': 'green',
                'titleTextColor': 'white'
            }
        );
    }
}