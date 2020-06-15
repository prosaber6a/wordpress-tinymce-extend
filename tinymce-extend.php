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

function tmce_extd_load_text_domain() {
	load_plugin_textdomain( 'tmce-extend', false, plugin_dir_url( __FILE__ ) . '/languages' );
}

add_action( 'plugin_loaded', 'tmce_extd_load_text_domain' );

function tmce_extd_admin_assets() {
	add_filter( 'mce_external_plugins', 'tmce_extd_extrnl_plugins' );
	add_filter( 'mce_buttons', 'tmce_extd_buttons' );
}

add_action( 'admin_init', 'tmce_extd_admin_assets' );

function tmce_extd_extrnl_plugins( $plugins ) {
	$plugins['tmce_extd_plugin'] = plugin_dir_url( __FILE__ ) . 'assets/js/tinymce.js';
	return $plugins;
}

function tmce_extd_buttons( $buttons ) {
	$buttons[] = 'tmce_extd_button_one';
	$buttons[] = 'tmce_extd_button_two';
	$buttons[] = 'tmce_extd_listbox';
	$buttons[] = 'tmce_extd_menu';

	return $buttons;
}