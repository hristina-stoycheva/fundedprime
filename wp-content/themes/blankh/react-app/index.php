<?php
// Serve the React application
if (!is_admin()) {
    include_once(get_template_directory() . '/react-app/index.html');
    exit;
}
?>
