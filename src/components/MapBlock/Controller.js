/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useRef, useEffect } from 'react';

import { useYMaps } from '@pbe/react-yandex-maps';

import { useDispatch } from 'react-redux';
import { setInstitutionAddress } from '../../redux/slices/requestSlice';

import View from './View';

function Controller() {
    const dispatch = useDispatch();

    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    const defaultState = {
        center: [54.31800414150244, 48.39647750793459],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl'],
    };

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }
        const myMap = new ymaps.Map(mapRef.current, defaultState);
        // myMap.container.fitToViewport();

        const searchControl = new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#search',
            },
        });

        myMap.controls.add(searchControl);

        searchControl.events.add('resultselect', (event) => {
            const index = event.get('index');
            searchControl.getResult(index).then((res) => {
                const position = res.geometry.getCoordinates();

                myMap.geoObjects.removeAll();

                ymaps.geocode(position, { kind: 'house' }).then(
                    (res0) => {
                        const nearest = res0.geoObjects.get(0);
                        const name = nearest.properties.get('name');
                        // props.setStreet(name.split(',')[0]);
                        // props.setHouse(name.split(',')[1]);

                        dispatch(setInstitutionAddress(name));

                        nearest.properties.set('iconContent', name);
                        nearest.options.set('preset', 'islands#redStretchyIcon');
                        myMap.geoObjects.add(nearest);
                    },
                    (error) => {
                        console.log(error);
                    },
                );
            });
        });

        myMap.events.add('click', (event) => {
            const position = event.get('coords');

            myMap.geoObjects.removeAll();

            ymaps.geocode(position, { kind: 'house' }).then(
                (res1) => {
                    const nearest = res1.geoObjects.get(0);
                    const name = nearest.properties.get('name');
                    // props.setStreet(name.split(',')[0]);
                    // props.setHouse(name.split(',')[1]);

                    dispatch(setInstitutionAddress(name));

                    nearest.properties.set('iconContent', name);
                    nearest.options.set('preset', 'islands#redStretchyIcon');
                    myMap.geoObjects.add(nearest);
                },
                (error) => {
                    console.log(error);
                },
            );
        });
    }, [ymaps, mapRef]);

    return <View ref={mapRef} />;
}

export default Controller;
