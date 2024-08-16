import { CREATE_ELEMENT, GET_ELEMENT_BY_ID } from "./dom_util.js";

const modalId = 'modal';
/**
 * Present and Hide modals
 */
export class MODAL_EXPERTISE {

    static ShowModal(title, view, { headingColor, titleTextColor }) {
        if (!view || !(view.style)) { return; }

        const titlePar = CREATE_ELEMENT('p');
        titlePar.innerText = title ?? '';

        const heading = CREATE_ELEMENT('div');
        heading.classList.add('flex-row');
        heading.style.backgroundColor = headingColor ?? 'royablue';
        heading.style.height = '10%';

        heading.style.color = ((headingColor === null) ? 'white' : titleTextColor) ?? 'black'

        heading.appendChild(titlePar);
        heading.style.padding = '5px';

        const modal = CREATE_ELEMENT('div');
        modal.id = modalId;
        modal.classList.add('f-w', 'f-h', 'modal', 'flex-column', 'justify-center', 'a-c');
        modal.onclick = (ev) => {
            ev.preventDefault();
            if (ev.target === modal) {
                MODAL_EXPERTISE.HideModal();
            }
        }

        const modalChild = CREATE_ELEMENT('div');
        modalChild.classList.add('modal-child', 'f-w');
        modalChild.appendChild(heading);

        view.classList.add('modal-child-view')
        view.style.height = '90%';
        view.classList.add('f-w', 'scroll-y');

        modalChild.appendChild(view)
        modal.appendChild(modalChild);

        document.body.appendChild(modal);
    }

    static HideModal() {
        const modal = GET_ELEMENT_BY_ID(modalId);
        if (modal) {
            document.body.removeChild(modal)
        }
    }

}