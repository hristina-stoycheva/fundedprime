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
define( 'DB_NAME', 'funded' );

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
define( 'AUTH_KEY',         '*KLnY.77VPW2XY`2_AG]B -q:JMXq).yy^{WD=0Zo7I/Kn2^mWAu?A0}!P*8.X:{' );
define( 'SECURE_AUTH_KEY',  'Dk9dyi8]Lp7ML.`Nzk:*OS&2*^R0j9Gos9H!foLx3TKfH_E.!(Umqvf]ohJqGqtD' );
define( 'LOGGED_IN_KEY',    'IkAh?-V>Jn[{l<yC@n|e.-qVaw??%[M j^#`Wu#lxJ3!v0^rn2ol;709t`e|:8;%' );
define( 'NONCE_KEY',        '7[Ly.+j/j?{zSCOI:zjyGmSYOJO^6#Q}y/yz}})@n]qgVy`i5!<yH2F@QunV>{(j' );
define( 'AUTH_SALT',        'bpg*AjlsJSY;>3PDu0<8f_8AJQ|NW/3F@T%EBA&1>*=K8a-`5M57F$qK!6j&_Zx;' );
define( 'SECURE_AUTH_SALT', '<IGeHA@F$hfPW.4z}Pmf*]qcDx7sy=ZH2uc5?N;B1%v4g$dE/f4v>R~E[3cqN2G[' );
define( 'LOGGED_IN_SALT',   '$Q;Ds>@EFwJ:C]7FH}6?^q#*F;:-9Ro;EByrWy5U_RGD|V%RftNPha9w=w.:41P~' );
define( 'NONCE_SALT',       'Nv<-%,5zW6PiadHXY;;a*$sJYPM F=TmfJ@*W)&phCu+$E]%d5;;@].mswa&je{M' );

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
