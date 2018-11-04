import { Directions } from '../constants/direction.constant'
import { placeBus, leftBus, rightBus, moveBus, reportBus } from '../components/command.component'
import { Displays } from '../constants/display.constant';
import { Park } from '../models/park.model';
import { Bus } from '../models/bus.model';
import { appendText, getValue, emptyValue, appendAlert, enableBtnsByClass } from '../services/dom.service';

const oneBus = new Bus();
const onePark = new Park();

export const initPark = () => {
    //get x,y from DOM and init park

}


export const place = () => {
    //get x,y and direction from DOM
    let x = parseInt(getValue('x_position'));
    let y = parseInt(getValue('y_position'));
    let direction = getValue('direction');
    
    if(!validInput(x,y,direction)) return;
    emptyValue('alert');

    placeBus(oneBus, x, y, direction).then(() => {
        emptyValue('report');
        const log = Displays.PLACE + `(${oneBus.xPosition} , ${oneBus.yPosition});`
        //append log to result textarea DOM
        appendText('report', log);
        //enable btns
        enableBtnsByClass('need_init');

    }).catch(err => { console.error(err) })
}

export const left = () => {
    leftBus(oneBus).then(() => {
        const log = Displays.LEFT;
        //append log to result textarea DOM
        appendText('report', '\n' + log);
    }).catch(err => { console.error(err) })
}

export const right = () => {
    rightBus(oneBus).then(() => {
        const log = Displays.RIGHT;
        //append log to result textarea DOM
        appendText('report', '\n' + log);
    }).catch(err => { console.error(err) })
}

export const move = () => {
    moveBus(oneBus, onePark).then(stopped => {
        console.log(oneBus.yPosition)
        let log = Displays.MOVE;
        if (stopped) log = Displays.STOPPED;
        appendText('report', '\n' + log);
        //append log to result textarea DOM
    }).catch(err => { console.error(err) })
}

export const report = () => {
    reportBus(oneBus).then(report => {
        //append report to report DOM
        appendText('report', '\n' + report);
    }).catch(err => { console.error(err) })
}

const validInput = (x,y,direction) => {
    if (isNaN(x) || isNaN(y)) {
        appendAlert('alert', Displays.POSITIONNAN);
        return false;
    }
    if (x >= onePark.width || y >= onePark.length || x < 0 || y < 0) {
        appendAlert('alert', Displays.OUTOFPARK);
        return false;
    }

    var vals = Object.keys(Directions).map(function(key) {
        return Directions[key];
    });
    if (!vals.includes(direction)) {
        appendAlert('alert', Displays.DIRECTIONERROR);
        return false;
    }

    return true;
}