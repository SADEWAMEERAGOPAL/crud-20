import { Routes } from '@angular/router';
import { PostDashboard } from './component/post-dashboard/post-dashboard';
import { PostDetails } from './component/post-details/post-details';
import { PostForm } from './component/post-form/post-form';
import { PageNotFound } from './component/page-not-found/page-not-found';

export const routes: Routes = [{
    path: "",
    component: PostDashboard
},
{
    path: "posts",
    component: PostDashboard
},
{
    path: "posts/addpost",
    component: PostForm
},
{
    path: "posts/:id",
    component: PostDetails
},
{
    path: "posts/:id/edit",
    component: PostForm
},
{
    path: "**",
    component: PageNotFound
}];
