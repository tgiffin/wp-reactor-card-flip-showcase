
# Logo File Requirements for WordPress Integration

## Required Logo Files

The Use Cases page requires 4 specific logo files to be uploaded to your WordPress site:

### 1. Header Logo
- **File Name:** `Logo_Reactor_H_4C-Dark.png`
- **Usage:** Main header logo
- **Specifications:** Horizontal layout, dark version
- **Recommended Size:** 200x80px minimum
- **Format:** PNG with transparent background

### 2. Footer Logo  
- **File Name:** `Logo_Reactor_H_4C-Light.png`
- **Usage:** Footer logo on dark background
- **Specifications:** Horizontal layout, light version
- **Recommended Size:** 240x96px minimum
- **Format:** PNG with transparent background

### 3. Card Front Logo
- **File Name:** `Logo_Reactor_BUG_4C.png`
- **Usage:** Small logo on colored card fronts
- **Specifications:** Bug/icon only, full color
- **Recommended Size:** 64x64px minimum
- **Format:** PNG with transparent background

### 4. Card Back Logo
- **File Name:** `Logo_Reactor_BUG_Navy.png`
- **Usage:** Small logo on white card backs
- **Specifications:** Bug/icon only, navy color
- **Recommended Size:** 64x64px minimum
- **Format:** PNG with transparent background

## File Naming Convention

The files are referenced in the code by their exact names. When uploading to WordPress:

1. **Keep original file names** for easiest integration
2. **Alternative:** Upload with any names and update file paths in code
3. **Upload location:** WordPress Media Library

## Usage in Code

### HTML References
```html
<!-- Header -->
<img src="Logo_Reactor_H_4C-Dark.png" alt="Reactor Data Logo" class="reactor-logo-header">

<!-- Footer -->
<img src="Logo_Reactor_H_4C-Light.png" alt="Reactor Data Logo" class="reactor-logo-footer">

<!-- Card Front -->
<img src="Logo_Reactor_BUG_4C.png" alt="Reactor Logo" class="reactor-card-logo">

<!-- Card Back -->
<img src="Logo_Reactor_BUG_Navy.png" alt="Reactor Logo" class="reactor-card-back-logo">
```

### WordPress Integration
Replace file names with WordPress media URLs:
```php
<!-- Example -->
<img src="<?php echo wp_get_attachment_url(123); ?>" alt="Reactor Data Logo">
```

## Quality Requirements

- **Resolution:** High DPI/Retina ready (2x minimum)
- **Format:** PNG preferred for transparency
- **Optimization:** Compressed for web delivery
- **Background:** Transparent for flexible placement

## Backup Files

If you don't have these exact files, similar logo variations can be substituted:
- Horizontal dark logo → any dark horizontal logo
- Horizontal light logo → any light horizontal logo  
- Colorful bug → any small colorful logo/icon
- Navy bug → any small dark logo/icon

Update the CSS sizing if using different aspect ratios.
