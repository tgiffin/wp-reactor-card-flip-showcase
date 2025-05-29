
# WordPress Integration Guide - Reactor Use Cases Page

This guide provides step-by-step instructions for integrating the Reactor Use Cases page into your WordPress site.

## Package Contents

- `reactor-use-cases.html` - Complete standalone HTML page
- `reactor-use-cases.css` - All styling including animations and responsive design
- `reactor-use-cases.js` - Interactive functionality (filtering, animations, card flips)
- `integration-guide.md` - This integration guide

## Required Logo Files

You'll need to upload these logo files to your WordPress media library:

- `Logo_Reactor_H_4C-Dark.png` - Header logo (horizontal dark)
- `Logo_Reactor_H_4C-Light.png` - Footer logo (horizontal light)  
- `Logo_Reactor_BUG_4C.png` - Card front logo (colorful bug)
- `Logo_Reactor_BUG_Navy.png` - Card back logo (navy bug)

## Integration Methods

### Method 1: WordPress Page Template (Recommended)

1. **Upload Assets**
   ```
   /wp-content/themes/your-theme/assets/css/reactor-use-cases.css
   /wp-content/themes/your-theme/assets/js/reactor-use-cases.js
   ```

2. **Create Page Template**
   Create `page-use-cases.php` in your theme directory:
   ```php
   <?php
   /*
   Template Name: Use Cases
   */
   
   get_header(); ?>
   
   <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/reactor-use-cases.css">
   
   <!-- Copy HTML content from reactor-use-cases.html (body content only) -->
   <div class="reactor-page">
       <!-- Header -->
       <header class="reactor-header">
           <!-- ... rest of HTML content ... -->
       </header>
       <!-- ... continue with all sections ... -->
   </div>
   
   <script src="<?php echo get_template_directory_uri(); ?>/assets/js/reactor-use-cases.js"></script>
   
   <?php get_footer(); ?>
   ```

3. **Create WordPress Page**
   - Go to Pages > Add New
   - Title: "Industry Use Cases"
   - Select "Use Cases" template
   - Publish

### Method 2: Custom Post Type Integration

1. **Add to functions.php**
   ```php
   function enqueue_reactor_assets() {
       if (is_page('use-cases')) {
           wp_enqueue_style('reactor-use-cases', get_template_directory_uri() . '/assets/css/reactor-use-cases.css');
           wp_enqueue_script('reactor-use-cases', get_template_directory_uri() . '/assets/js/reactor-use-cases.js', array(), '1.0', true);
       }
   }
   add_action('wp_enqueue_scripts', 'enqueue_reactor_assets');
   ```

2. **Embed in Page Content**
   - Create a new page
   - Switch to HTML/Code editor
   - Copy the HTML content from `reactor-use-cases.html` (everything inside `<body>`)

### Method 3: Shortcode Implementation

1. **Add to functions.php**
   ```php
   function reactor_use_cases_shortcode() {
       wp_enqueue_style('reactor-use-cases', get_template_directory_uri() . '/assets/css/reactor-use-cases.css');
       wp_enqueue_script('reactor-use-cases', get_template_directory_uri() . '/assets/js/reactor-use-cases.js', array(), '1.0', true);
       
       ob_start();
       include get_template_directory() . '/templates/reactor-use-cases-content.php';
       return ob_get_clean();
   }
   add_shortcode('reactor_use_cases', 'reactor_use_cases_shortcode');
   ```

2. **Create Template File**
   Create `/templates/reactor-use-cases-content.php` with the HTML content

3. **Use Shortcode**
   Add `[reactor_use_cases]` to any page or post

## Logo File Setup

1. **Upload to Media Library**
   - Go to Media > Add New
   - Upload all 4 logo files
   - Note the file URLs

2. **Update File Paths**
   In the CSS and HTML files, replace logo references with WordPress URLs:
   ```html
   <!-- Replace -->
   <img src="Logo_Reactor_H_4C-Dark.png" alt="Reactor Data Logo">
   
   <!-- With -->
   <img src="<?php echo wp_get_attachment_url(123); ?>" alt="Reactor Data Logo">
   ```

## Customization Options

### Colors
Update CSS custom properties in `reactor-use-cases.css`:
```css
:root {
    --reactor-blue: #1E40AF;
    --reactor-medium-blue: #3B82F6;
    --reactor-dark-blue: #1E3A8A;
    --reactor-text-grey: #6B7280;
    --soundcommerce-yellow: #FCD34D;
    --reactor-red: #DC2626;
}
```

### Typography
The page uses Inter font from Google Fonts. To match your site:
1. Remove Google Fonts link if your theme already includes it
2. Update font-family in CSS to match your theme

### Layout
- Cards are responsive: 1 column (mobile), 2 (tablet), 3-4 (desktop)
- Grid adjusts automatically based on screen size
- All animations work on touch devices

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with reduced animations)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- CSS animations use hardware acceleration
- JavaScript uses Intersection Observer for efficient scroll animations
- No external dependencies beyond Google Fonts
- Total file size: ~50KB (CSS + JS)

## Testing Checklist

- [ ] Page loads without errors
- [ ] All logos display correctly
- [ ] Filter buttons work
- [ ] Cards flip on hover (desktop) and click
- [ ] Scroll animations trigger
- [ ] Mobile responsive layout
- [ ] Touch interactions work on mobile
- [ ] No JavaScript console errors

## Troubleshooting

**Cards not flipping:** Check that JavaScript file is loading and no console errors

**Logos not showing:** Verify file paths are correct and files are uploaded

**Styling issues:** Check for CSS conflicts with theme styles

**Mobile issues:** Verify viewport meta tag is present in theme header

## Support

For technical questions about integration, refer to your theme documentation or contact your developer.
