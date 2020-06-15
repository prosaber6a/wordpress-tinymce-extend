<?php
/**
 * Plugin Name: TinyMCE Extend
 * Author: SaberHR
 * Plugin URI: http://saberhr.com
 * Author URI: http://saberhr.com
 * Description:
 * Version: 1.0.0
 * Licence: GPLv2 or later
 * Text Domain: tmce-extend
 * Domain Path: /language/
 */

function tmce_ext_load_text_domain () {
	load_plugin_textdomain('tmce-extend', false, plugin_dir_url(__FILE__) . '/languages');
}

add_action('plugin_loaded', 'tmce_ext_load_text_domain');
