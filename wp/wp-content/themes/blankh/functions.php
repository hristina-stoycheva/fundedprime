<?php
/**
 * blankh functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package blankh
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function blankh_setup()
{
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on blankh, use a find and replace
	 * to change 'blankh' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('blankh', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Primary', 'blankh'),
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'blankh_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height' => 250,
			'width' => 250,
			'flex-width' => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'blankh_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function blankh_content_width()
{
	$GLOBALS['content_width'] = apply_filters('blankh_content_width', 640);
}
add_action('after_setup_theme', 'blankh_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function blankh_widgets_init()
{
	register_sidebar(
		array(
			'name' => esc_html__('Sidebar', 'blankh'),
			'id' => 'sidebar-1',
			'description' => esc_html__('Add widgets here.', 'blankh'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget' => '</section>',
			'before_title' => '<h2 class="widget-title">',
			'after_title' => '</h2>',
		)
	);
}
add_action('widgets_init', 'blankh_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function blankh_scripts()
{
	wp_enqueue_style('blankh-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('blankh-style', 'rtl', 'replace');

	wp_enqueue_script('blankh-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'blankh_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

//create custom menu
function my_custom_menu()
{
	register_nav_menu('header_menu', __('Header Menu'));
	register_nav_menu('footer_menu', __('Footer Menu'));
}
add_action('init', 'my_custom_menu');
// REACT

function register_menu_rest_route()
{
	register_rest_route('menus/v1', '/menus/(?P<slug>[a-zA-Z0-9-_]+)', array(
		'methods' => 'GET',
		'callback' => 'get_menu_by_slug',
	));
}

function get_menu_by_slug($request)
{
	$slug = $request['slug'];
	$locations = get_nav_menu_locations();

	if (!isset($locations[$slug])) {
		return new WP_Error('menu_not_found', 'Menu not found', array('status' => 404));
	}

	// Get the menu object by location
	$menu = wp_get_nav_menu_object($locations[$slug]);
	$menu_items = wp_get_nav_menu_items($menu->term_id);

	// Transform the flat list of items into a hierarchical tree
	$menu_tree = build_menu_tree($menu_items);

	return rest_ensure_response($menu_tree);
}

/**
 * Build the menu tree from a flat array of menu items
 *
 * @param array $menu_items Flat list of menu items
 * @return array Hierarchical menu tree
 */
function build_menu_tree($menu_items)
{
	$menu_map = [];
	$menu_tree = [];
	$site_url = get_site_url();

	// Create an associative array of menu items indexed by their ID
	foreach ($menu_items as $item) {
		$url = $item->url;
		$relative_url = str_replace($site_url, '', $url);
		$menu_map[$item->ID] = [
			'id' => $item->ID,
			'title' => $item->title,
			'url' => $item->url,
			'slug' => $relative_url , 
			'menu_item_parent' => $item->menu_item_parent,
			'children' => [],
		];
	}

	// Build the tree structure by assigning children to their parents
	foreach ($menu_map as $item_id => $item) {
		if ($item['menu_item_parent'] == 0) {
			// Top-level item
			$menu_tree[] = &$menu_map[$item_id];
		} else {
			// Child item, assign to the parent
			$parent_id = $item['menu_item_parent'];
			if (isset($menu_map[$parent_id])) {
				$menu_map[$parent_id]['children'][] = &$menu_map[$item_id];
			}
		}
	}

	return $menu_tree;
}

add_action('rest_api_init', 'register_menu_rest_route');

include get_template_directory() . '/acf_functions.php';
function add_template_to_rest_api($data, $post, $request) {
    $template = get_page_template_slug($post->ID);  // Get the template for the page
    $data->data['template'] = $template;  // Add the template to the response data
    return $data;
}

add_filter('rest_prepare_page', 'add_template_to_rest_api', 10, 3);

function add_cors_http_header() {
    $allowed_origins = [
        'http://localhost:3000', // React development server
        'http://192.168.0.101:3000', // Another possible React dev link
        'http://your-live-site.com', // Production React app
    ];

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    // Handle preflight OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        header("Access-Control-Max-Age: 3600");
        exit;
    }
}
add_action('init', 'add_cors_http_header');


