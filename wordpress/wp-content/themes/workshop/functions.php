<?php

/**
 * Add custom fields to JSON API
 */
add_action('rest_api_init', function () {
    register_rest_field(
        'post', // Post type
        'custom', // Field name in reponse
        array('get_callback' => function ($object) {
            // Attach all custom fields to response field specified above
            return get_post_meta($object['id']);
        })
    );
});

/**
 * Be more strict with cross-domain requests
 * Allow requests from http://localhost:5000 only
 */
// add_action('rest_api_init', function () {
//     remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');

//     add_filter('rest_pre_serve_request', function ($value) {
//         header('Access-Control-Allow-Origin: http://localhost:5000');

//         return $value;
//     });
// }, 15);
