import axios from 'axios'

class BaatoReverseSearch {
    constructor(
        props,
    ) {
        this.key = props && props.key ? props.key : 'YOURQUERY'
        this.lat = props && props.lat ? props.lat : null
        this.lon = props && props.lon ? props.lon : null
        this.radius = props && props.radius ? props.radius : 0.5 // based on spring-boot API design
        this.baseUrl = props && props.baseUrl ? props.baseUrl : 'http://baato.io/api'
        this.apiVersion = props && props.apiVersion ? props.apiVersion : '1'
    }

    setKey(key) {
        this.key = key
        return this
    }

    setApiVersion(version) {
        this.apiVersion = version
    }

    setLat(lat) {
        this.lat = lat
        return this
    }

    setLon(lon) {
        this.lon = lon
        return this
    }


    setRadius(radius) {
        this.radius = radius
        return this
    }

    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl
        return this
    }


    async doRequest() {
        if (this.key !== null) {
            return axios.get(`${this.baseUrl}/reverse`, {
                params: {
                    key: this.key,
                    lat: this.lat,
                    lon: this.lon,
                    radius: this.radius,
                },
                headers: {
                    Accept: `application/vnd.baato.api.v${this.apiVersion}+json`,
                },
            })
                .then(response => response.data)

            // return fetch(this.getBaseUrl())
        }

        return null
    }
}


export default BaatoReverseSearch
