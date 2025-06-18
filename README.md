# The City - Real Estate Web Application

A modern, responsive real estate web application built with React and Vite, featuring apartment listings with advanced filtering, search capabilities, and an interactive user interface.

## 🏠 Features

- **Property Listings**: Browse apartments and rental properties with detailed information
- **Advanced Search**: Search properties by location, price, and other criteria
- **Smart Filtering**: Filter by property type, price range, bedrooms, bathrooms, and amenities
- **Interactive Cards**: Property cards with star ratings, contact information, and status indicators
- **Favorites System**: Save and manage your favorite properties
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Image Optimization**: WebP format for faster loading and better performance
- **Status Tracking**: Visual indicators for property availability (Rented/Available)

## 🚀 Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Processing**: Python (Pillow) for WebP conversion
- **Data Management**: Context API for state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/the-city.git
   cd the-city
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Project Structure

```
the-city/
├── public/
│   ├── images/          # Property images (WebP format)
│   └── mockApartments.js # Mock data for development
├── src/
│   ├── components/      # React components
│   ├── context/         # Context providers
│   ├── data/           # Data files
│   ├── pages/          # Page components
│   └── lib/            # Utility functions
├── import_data/        # Data import scripts
├── convert_to_webp.py  # Image conversion script
└── remove_jpeg.py      # JPEG cleanup script
```

## 📊 Data Management

### Importing Property Data

The project includes scripts to import property data from Excel files:

1. **Prepare your Excel file** with columns for property details
2. **Run the import script**:
   ```bash
   python import_data/import-os.py
   ```
3. **Update mock data**:
   ```bash
   python update_mock_data.py
   ```

### Image Processing

Convert JPEG images to WebP format for better performance:

```bash
python convert_to_webp.py
```

Remove original JPEG files after conversion:

```bash
python remove_jpeg.py
```

## 🎨 Key Components

- **ApartmentCard**: Displays property information with interactive elements
- **Header**: Navigation and search functionality
- **FilterBar**: Advanced filtering options
- **FavoritesPage**: Manage saved properties
- **FavoritesContext**: Global state management for favorites

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features in Detail

### Search & Filter
- Real-time search functionality
- Multiple filter options (type, price, bedrooms, bathrooms)
- Amenities filtering
- Sticky search bar for better UX

### Property Cards
- Interactive star rating system
- Property status indicators (Available/Rented)
- Contact information display
- Image galleries
- Detailed property information

### Favorites System
- Add/remove properties to favorites
- Persistent storage using localStorage
- Dedicated favorites page
- Easy management interface

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Set the source to the `gh-pages` branch or `/docs` folder

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@thecity.com or create an issue in the GitHub repository.

---

**Built with ❤️ for the real estate community** 