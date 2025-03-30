import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import viteImagemin from 'vite-plugin-imagemin';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7, // Уровень оптимизации для GIF
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7, // Уровень оптимизации для PNG
    //   },
    //   mozjpeg: {
    //     quality: 20, // Качество JPEG (0-100)
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9], // Качество PNG
    //     speed: 4, // Скорость сжатия
    //   },
    //   svgo: {
    //     plugins: [
    //       { name: 'removeViewBox' }, // Удаляет viewBox из SVG
    //       { name: 'removeEmptyAttrs', active: false }, // Удаляет пустые атрибуты
    //     ],
    //   },
    // }),
    imagePresets({
      // Создаём пресет для маленьких изображений
      thumbnail: widthPreset({
        class: 'img thumbnail', // Класс для <img>
        widths: [300, 600], // Ширины для srcset
        formats: {
          webp: { quality: 50 }, // Формат WebP с качеством 50%
          avif: { quality: 40 }, // Формат AVIF с качеством 40%
        },
      }),
      // Создаём пресет для больших изображений
      large: widthPreset({
        widths: [800, 1200], // Ширины для srcset
        formats: {
          webp: { quality: 70 }, // Формат WebP с качеством 70%
          jpg: { quality: 60 }, // Формат JPG с качеством 60%
        },
      }),
    }),
    viteCompression({
      algorithm: 'gzip', // Используйте 'brotliCompress' для Brotli
      ext: '.gz', // Расширение для сжатых файлов
      // ext: '.br', // Расширение для сжатых файлов
    }),
  ],
  // base: '/', // Путь для размещения на GitHub Pages
  base: '/', // Путь для размещения на GitHub Pages
  server: {
    port: 5173,
    open: true, // Автоматически открывать браузер
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Генерация sourcemaps
    minify: 'terser', // Минификация кода
    rollupOptions: {
      output: {
        manualChunks: {
          // Создаём отдельный бандл для библиотеки lodash
          lodash: ['lodash'],
          // Создаём отдельный бандл для библиотеки react
          react: ['react', 'react-dom'],
          // Создаём отдельный бандл для ваших компонентов
          components: ['src/components/Button.tsx'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Алиас для пути src/
    },
  },
  
  
})
