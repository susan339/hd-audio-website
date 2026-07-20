# HD Audio B2B Website Deployment Guide

This guide outlines how to deploy your HD Audio B2B website using the **GitHub + Vercel + Cloudflare R2 + Namecheap** stack.

---

## 1. GitHub: Code Repository
1. Create a new repository on GitHub (e.g., `hd-audio-website`).
2. Run the following commands in your local `hd-audio-site` folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/hd-audio-website.git
   git push -u origin main
   ```

## 2. Vercel: Hosting & CI/CD
1. Login to [Vercel](https://vercel.com).
2. Click **"New Project"** and import your GitHub repository.
3. In **Environment Variables**, add any required keys (see R2 section).
4. Click **Deploy**. Vercel will automatically redeploy every time you push to GitHub.

## 3. Cloudflare R2: Asset Storage (PDFs, Images)
R2 is S3-compatible. Use it to store heavy assets like HD Audio samples and Catalogs.
1. Create a Bucket in Cloudflare R2.
2. Generate **S3 API Credentials** (Access Key & Secret Key).
3. Add these to Vercel Environment Variables:
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `R2_ENDPOINT` (e.g., `https://<account-id>.r2.cloudflarestorage.com`)
   - `R2_BUCKET_NAME`

## 4. Namecheap: Domain Management
1. Go to your Namecheap Dashboard.
2. Select your domain -> **Manage** -> **Advanced DNS**.
3. In Vercel, go to **Project Settings -> Domains** and add your domain (e.g., `hdaudio.com`).
4. Vercel will provide **A** and **CNAME** records. Copy these into Namecheap Advanced DNS.
5. Wait 10-60 minutes for DNS propagation.

---

## Technical Stack Summary
- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Storage**: Cloudflare R2
- **DNS**: Namecheap
