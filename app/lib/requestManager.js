import request from 'axios';
import metaTagsManager from './metaTagsManager';

var API_URL = 'menu_items.json';
var URL = 'menu_items/'
export default {


    /**
     * Retrieve list of entities from server using AJAX call.
     *
     * @returns {Promise} - Result of ajax call.
     */
    fetchEntities() {
        return request({
            method: 'GET',
            url: API_URL,
            responseType: 'json',
        });
    },

    /**
     * Submit new entity to server using AJAX call.
     *
     * @param {Object} entity - Request body to post.
     * @returns {Promise} - Result of ajax call.
     */
    submitEntity(entity) {
        return request({
            method: 'POST',
            url: API_URL,
            responseType: 'json',
            headers: {
                'X-CSRF-Token': metaTagsManager.getCSRFToken(),
            },
            data: entity,
        });
    },

    /**
     * Edit existing entiy to server with AJAX call,
     * @param {Number} id of the entity
     * @param {Object} new entity
     *
     * @returns {Promise} - Result of the call
     */
    editEntity(id, entity){
        let entity_URL = URL + id +'.json'
        return request({
            method: 'PUT',
            url: entity_URL,
            responseType: 'json',
            data: entity
        });
    }
};