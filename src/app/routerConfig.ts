import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
export default appRoutes;