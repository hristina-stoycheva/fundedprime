<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fundedprime' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r[+k^s)&w*NkY1B^4MI)fP8y` ?!v687`brq</K0DnUQdysmM&ZyHl74/b&?0_UK' );
define( 'SECURE_AUTH_KEY',  'p%:Ye@;| <HMgr]:^bm0r=-*y1K?|K~q(fXV?#0K~H0{%T)~xgm%.)D[NsP,KA,X' );
define( 'LOGGED_IN_KEY',    'Clx|4!Yg8%:L3s>c.Y*[h%<dciM$Lu/oMos*4&~*Sw<6-LtyRJe?[?Mueu|c$6/k' );
define( 'NONCE_KEY',        'j}KMAVs>ULAEA{kJO%L9B*hlyz<|`5[7sZGKH$g]<8Z:uI1AZtdOHF5)sf%c5^`Z' );
define( 'AUTH_SALT',        ')5JQyk<}P0]/0eLzg Y[Y>>i:tZlHBe)ajhV|mo4f9(,f ]hP|?3ccV.N!#Ub0;8' );
define( 'SECURE_AUTH_SALT', 'tcEu}S&iq.@@FBES4~?!eICd@3 y|taYi Fq8Hnk(F:4L-!%b08/$Xc(SheN:Glm' );
define( 'LOGGED_IN_SALT',   '[=QR=P3VXub$~k~Ov5n0dR8~TDB~7qf[8]T,A`tKmmxKH]X!OI&8i$*4AS?TrGey' );
define( 'NONCE_SALT',       'FB$rCRu1Oy^FZV!4<Z(@b2zbuKu#EvUF]kP|n*C)G}$_72]5m`: X?_=~U;`*`9{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
