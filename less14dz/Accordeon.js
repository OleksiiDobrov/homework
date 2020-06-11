function Accordeon(list) {
    this.list = list;
    this.addStyleClass();
    this.list.addEventListener('click', this.onclickTitle);
    this.displayArea;
    console.log('start', this.list);
}


Accordeon.CLASS_TITLE = 'title';
Accordeon.CLASS_TITLE_STYLE = 'style';
Accordeon.CLASS_LIST = 'accordeon';
Accordeon.ACTIVE_CLASS = 'active';
Accordeon.BODY_SHOW_CLASS = 'show';

Accordeon.prototype.addStyleClass = function () {
    this.list.classList.add(Accordeon.CLASS_LIST);
    this.title = document.getElementsByClassName('title');
    for (let i = 0; i < this.title.length; i++) {
        this.title[i].classList.add(Accordeon.CLASS_TITLE_STYLE);
    }
    console.log(this.title);
};

Accordeon.prototype.onclickTitle = function (event) {
    if (event.target.classList.contains(Accordeon.CLASS_TITLE)) {
        event.target.classList.add(Accordeon.ACTIVE_CLASS);
        event.target.nextElementSibling.classList.add(Accordeon.BODY_SHOW_CLASS);
        if (this.displayArea) {
            this.displayArea.classList.remove(Accordeon.ACTIVE_CLASS);
            this.displayArea.nextElementSibling.classList.remove(
                Accordeon.BODY_SHOW_CLASS
            );
        }

        this.displayArea = this.displayArea === event.target ? 0 : event.target;
    }
};