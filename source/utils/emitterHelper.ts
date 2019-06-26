import { EventEmitter } from "events";

export function emitError(eventEmitter: EventEmitter, error: any){
    const type = error.type == null ? 'error' : error.type;
    const description = error.description == null ? error : error.description;
    return eventEmitter.emit(type, description);
}

export function emitSuccess(eventEmitter: EventEmitter, data: any){
    return eventEmitter.emit('success', data);
}