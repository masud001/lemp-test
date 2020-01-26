
export function renderLocationId(key) {
        let locatinIds = JSON.parse(localStorage.getItem("locationIds"));

        const locationId = locatinIds.filter(x=> x.locationKey==key);
        if(locationId.length > 0) 
        return locationId[0].locationId;
        return "";

    }