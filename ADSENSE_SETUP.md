# Google AdSense Setup Guide

This guide will help you set up Google AdSense on your ToolMate website.

## 📋 Prerequisites

Before applying for AdSense, make sure you have:
- ✅ Privacy Policy page
- ✅ Terms of Use page
- ✅ Contact page
- ✅ At least 3-5 quality tools/pages
- ✅ Original, valuable content
- ✅ Website deployed and accessible online

## 🚀 Step 1: Apply for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Click "Get Started"
3. Enter your website URL: `https://your-domain.com`
4. Fill in your account information
5. Submit your application

## ⏳ Step 2: Wait for Approval

- Google typically reviews applications within 1-2 weeks
- They will check if your site meets their policies
- You'll receive an email when approved

## 🔧 Step 3: Get Your Publisher ID

Once approved:

1. Log in to your AdSense account
2. Go to **Account** → **Settings**
3. Find your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
4. Copy this ID

## 📝 Step 4: Update Your Code

### Update the AdSense Script

Open `app/layout.tsx` and replace the placeholder:

```tsx
// Find this line:
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"

// Replace with your actual Publisher ID:
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
```

### Update the Ad Component

Open `components/AdBanner.tsx` and replace:

```tsx
// Find this line:
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"

// Replace with your actual Publisher ID:
data-ad-client="ca-pub-1234567890123456"
```

## 🎯 Step 5: Create Ad Units

1. In AdSense dashboard, go to **Ads** → **By ad unit**
2. Click **+ New ad unit**
3. Choose **Display ads**
4. Name it (e.g., "Home Page Banner", "Tool Page Banner")
5. Select ad size: **Responsive**
6. Click **Create**
7. Copy the **Ad slot ID** (format: `1234567890`)

## 🔄 Step 6: Update Ad Slots

Replace the placeholder ad slots in your pages:

### Home Page (`app/page.tsx`)
```tsx
<AdBanner dataAdSlot="YOUR_HOME_AD_SLOT_ID" />
```

### QR Code Page (`app/tools/qr-code/page.tsx`)
```tsx
<AdBanner dataAdSlot="YOUR_QR_AD_SLOT_ID" />
```

### Password Generator (`app/tools/password-generator/page.tsx`)
```tsx
<AdBanner dataAdSlot="YOUR_PASSWORD_AD_SLOT_ID" />
```

### Word Counter (`app/tools/word-counter/page.tsx`)
```tsx
<AdBanner dataAdSlot="YOUR_WORD_COUNTER_AD_SLOT_ID" />
```

## ✅ Step 7: Test Your Ads

1. Deploy your updated code to production
2. Visit your website
3. Ads may take 10-20 minutes to appear
4. Initially, you might see blank spaces or PSA ads
5. After a few hours, real ads should start showing

## 📊 Best Practices

### Ad Placement
- ✅ Place ads after main content
- ✅ Don't place too many ads (max 3 per page)
- ✅ Ensure ads don't interfere with user experience
- ❌ Don't place ads too close to navigation
- ❌ Don't encourage clicks ("Click here", etc.)

### Content Quality
- ✅ Keep adding new tools regularly
- ✅ Ensure all tools work properly
- ✅ Write helpful descriptions
- ✅ Maintain privacy and legal pages

### Traffic
- Focus on SEO to get organic traffic
- Share your tools on social media
- Consider writing blog posts about your tools

## 🔍 Monitoring

Check your AdSense dashboard regularly:
- **Performance** → View earnings and clicks
- **Optimization** → Get suggestions to improve revenue
- **Reports** → Detailed analytics

## ⚠️ Important Notes

1. **Don't click your own ads** - This violates AdSense policies
2. **Don't ask others to click** - This is also prohibited
3. **Monitor invalid traffic** - AdSense will warn you if detected
4. **Keep content original** - No copied content
5. **Maintain quality** - Low-quality sites may get banned

## 🆘 Troubleshooting

### Ads Not Showing?
- Wait 10-20 minutes after deployment
- Check browser console for errors
- Verify your Publisher ID is correct
- Ensure ad blocker is disabled
- Check if your site is approved

### Low Earnings?
- Increase traffic through SEO
- Add more tools/content
- Improve user engagement
- Optimize ad placement

## 📞 Support

If you need help:
- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Community](https://support.google.com/adsense/community)
- Email: devpatiphan@gmail.com

---

Good luck with your AdSense journey! 🚀
