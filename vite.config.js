//import { defineConfig } from 'vite';

//export default defineConfig({
 // base: './', // Ensures relative paths for deployment
 // build: {
 //   outDir: 'dist', // Directory where the build files will be generated
 // },
//});
//import { defineConfig } from "vite";

//export default defineConfig({
 // build: {
 //   rollupOptions: {
//      external: ["firebase/app", "firebase/firestore"],
 //   },
//  },
//});
//import { defineConfig } from 'vite';

//export default defineConfig({
 //   resolve: {
 //       alias: {
  //          // Resolve Firebase modules
 //           'firebase/app': 'firebase/app/dist/index.esm.js',
 //           'firebase/firestore': 'firebase/firestore/dist/index.esm.js',
            // Add other Firebase packages if needed
  //      }
 //   },
 //   build: {
        // Optional: Make the build process more efficient
   //     target: 'esnext',
//    }
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // Directory where the build files will be generated
        target: 'esnext', // Ensure compatibility with ES modules
        
rollupOptions: {
      external: [],
    },
},
  optimizeDeps: {
    include: ["firebase/app", "/node_modules/firebase/firestore"], // Include Firebase explicitly
  },
});



