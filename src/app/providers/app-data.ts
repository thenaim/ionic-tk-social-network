import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AppDataInterface {
    stories: any[];
    stories_list: any[];
    posts: any[];
    discavery: any[];
    messages: any[];
    playlists: any[];
    musics: any[];
};

@Injectable({
    providedIn: 'root'
})
export class AppData {
    data: AppDataInterface;

    constructor(public http: HttpClient) { }

    load(): Promise<AppDataInterface> {
        if (this.data) return of(this.data).toPromise();

        return this.http.get('assets/data/data.json').pipe(
            tap((data: AppDataInterface) => this.data = data)
        ).toPromise();
    }

    async getStories() {
        return this.load().then((data) => {
            return data.stories;
        });
    }

    async getStoriesList() {
        return this.load().then((data) => {
            return data.stories_list;
        });
    }

    async getPosts() {
        return this.load().then((data) => {
            return data.posts;
        });
    }

    async getDiscavery() {
        return this.load().then((data) => {
            return data.discavery;
        });
    }

    async getMessages() {
        return this.load().then((data) => {
            return data.messages;
        });
    }

    async getMessageUser(id) {
        return this.load().then((data) => {
            const res = data.messages.find(mes => mes.id === id);
            return res;
        });
    }

    async getPlaylists() {
        return this.load().then((data) => {
            return data.playlists;
        });
    }

    async getMusics() {
        return this.load().then((data) => {
            return data.musics;
        });
    }
}