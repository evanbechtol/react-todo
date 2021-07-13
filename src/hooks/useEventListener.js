import { useEffect, useRef } from "react";

const UseEventListener = ( eventName, handler, elem ) => {
  const savedHandler = useRef();

  useEffect( () => {
    savedHandler.current = handler;
  }, [ handler ] );

  useEffect( () => {
    const isSupported = elem && elem.addEventListener;

    if ( !isSupported ) {
      return;
    }

    const eventListener = ( event ) => savedHandler.current( event );
    elem.addEventListener( eventName, eventListener );

    return () => {
      elem.removeEventListener( eventName, eventListener );
    };
  }, [ eventName, elem ] );
};

export default UseEventListener;
