import moment from 'moment'

export const func = {
    /**
     * Fucntion move follow coordinates x and y
     * @param {*} divid 
     * @param {*} xpos 
     * @param {*} ypos 
     * CreatedBy: PQ Huy (16.07.2021)
     */
    move: function (divid, xpos, ypos) {
        divid.style.left = xpos + "px";
        divid.style.top = ypos + "px";
    },
    /**
     * Function start moving
     * @param {ref} divid 
     * @param {id} wrapper 
     * @param {event} evt 
     * @returns 
     * Createdby:  PQ Huy (16.07.2021)
     */
    startMoving: function (divid, wrapper, evt) {
        evt = evt || window.event;
        var rect = divid.getBoundingClientRect(), //Return the size of an element and its position relative to the viewport
            posX = evt.clientX,
            posY = evt.clientY,
            divTop = rect.top,
            divLeft = rect.left,

            //width height div
            eWi = parseInt(divid.style.width),
            eHe = parseInt(divid.style.height),

            //width height wrapper
            cWi = parseInt(document.getElementById(wrapper).style.width),
            cHe = parseInt(document.getElementById(wrapper).style.height);
        
        //width cursor to modal
        var diffX = posX - divLeft,
            diffY = posY - divTop;
        
        //chỉ cho phép drag ở vùng chỉ định
        if (diffY > 50) {
            return;
        }
        divid.onmousemove = function (evt) {
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                aX = posX - diffX,
                aY = posY - diffY;
            if (aY < -50) this.stopMoving(divid);
            if (aX < 0) aX = 0;
            if (aY < 0) aY = 0;
            if (aX + eWi > cWi) aX = cWi - eWi;
            if (aY + eHe > cHe) aY = cHe - eHe;
            func.move(divid, aX, aY);
        };
    },
    /**
     * Function stop moving
     * @param {*} divid 
     * CreatedBy:  PQ Huy (16.07.2021)
     */
    stopMoving: function (divid) {
        divid.onmousemove = function () { };
    },
};
