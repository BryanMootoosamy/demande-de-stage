<?php
    function attribution($virtualVar) {
        if (isset($_POST[$virtualVar]) && !empty($_POST[$virtualVar])) {
            return $_POST[$virtualVar];
        };
    }
    function sanitize($virtualVar, $parameter) {
        if (isset($virtualVar) && !empty($virtualVar)) {
            $content = filter_var($virtualVar, $parameter);
            return $content;
        }
    }