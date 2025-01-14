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
define( 'AUTH_KEY',         'KL#,2.zP+q#-;U ;]6{u8tKeO^vLmT91Wi]:- Vnl*9G4Uh8zm_4uD )P,`>p07S' );
define( 'SECURE_AUTH_KEY',  'Q4/_$:e;rjp(|odl:9 PT8KE||Q;&)y+`U[cQ;{&1IQqZW*,lEJTr@#W&=Nvwi]2' );
define( 'LOGGED_IN_KEY',    'L:;$R.tC,a_dP0;GmR5.5]MSY?d~*5_~+*~9lK>h]e6eOf*Owm 0xfc))@mvP9tz' );
define( 'NONCE_KEY',        'JrU9|#65O+:lt+`m2Q_6YsHO@SkAS_>S[rVce?NKfL$s%It&S:Lgl@9{$ljRJ  d' );
define( 'AUTH_SALT',        'Z!}$~:#b}^+:eO.Jrf.v%7n07*o,#Dfc12r)imb/j[V5|I+y(GOdDxudWv7O 2Y}' );
define( 'SECURE_AUTH_SALT', 'daQ<88m|(%Ee})xI6IZ7z/c`Z@DCI>JPIF_MDVulnlsh2Cz8>3^])B[<Z?3@h%pB' );
define( 'LOGGED_IN_SALT',   'tI(x?,`]Nb+?$F/u=zmp>QfNq}d,Oy=q1o)PIi3w/x~I7 gCo:tJLDiXmS)pp6>A' );
define( 'NONCE_SALT',       'avHR?I4{@YhFcVi(a@6sTIU=j6!{2J#;1TK{H?/L@NHZ)<b~C0JE3uilg`bYah:^' );

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
