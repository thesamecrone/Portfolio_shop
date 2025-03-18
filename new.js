( () => {
    "use strict";
    var e, t, i, o, a, s, n, r, c, l, d = {
        493782: (e, t, i) => {
            function o() {
                return {
                    icon: '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.88 18.12a1.25 1.25 0 0 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76l7-7a1.25 1.25 0 0 1 1.76 1.76L9.77 12z" fill="currentColor"/></svg>',
                    name: "chevron_left_24"
                }
            }
            i.d(t, {
                getIcon24ChevronLeft: () => o
            })
        }
        ,
        597825: (e, t, i) => {
            function o() {
                return {
                    icon: '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.23 12 8.12 5.88a1.25 1.25 0 1 1 1.76-1.76l7 7c.5.48.5 1.28 0 1.76l-7 7a1.25 1.25 0 0 1-1.76-1.76z" fill="currentColor"/></svg>',
                    name: "chevron_right_24"
                }
            }
            i.d(t, {
                getIcon24ChevronRight: () => o
            })
        }
        ,
        153752: (e, t, i) => {
            function o() {
                return {
                    icon: '<svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.44C0 7.1 0 3.94 1.97 1.97S7.1 0 13.44 0h1.12c6.34 0 9.5 0 11.47 1.97C28 3.94 28 7.1 28 13.44v1.12c0 6.34 0 9.5-1.97 11.47C24.06 28 20.9 28 14.56 28h-1.12c-6.34 0-9.5 0-11.47-1.97C0 24.06 0 20.9 0 14.56z" fill="#07f"/><path d="M18.48 5.6c-5.81 0-8.96 7.28-18.48 7.28v1.68c0 6.34 0 9.5 1.97 11.47C3.94 28 7.1 28 13.44 28h1.12c6.34 0 9.5 0 11.47-1.97C28 24.06 28 20.9 28 14.56v-4.33C26.53 9.1 22.82 5.6 18.48 5.6z" fill="#f45fff"/><g fill="#fff"><path d="M21.7 14.27a1.26 1.26 0 0 1 2.52 0v5.06a1.26 1.26 0 0 1-2.52 0zm-4.48-3.22a1.26 1.26 0 0 1 2.52 0v11.5a1.26 1.26 0 0 1-2.52 0zm-4.48 3.22a1.26 1.26 0 0 1 2.52 0v5.06a1.26 1.26 0 0 1-2.52 0zM8.26 16.1a1.26 1.26 0 0 1 2.52 0v1.42a1.26 1.26 0 0 1-2.52 0zm-4.48 0a1.26 1.26 0 0 1 2.52 0v1.42a1.26 1.26 0 0 1-2.52 0z"/></g></svg>',
                    name: "logo_vk_music_color_28"
                }
            }
            i.d(t, {
                getIcon28LogoVkMusicColor: () => o
            })
        }
        ,
        968773: (e, t, i) => {
            i.d(t, {
                default: () => P
            });
            var o = i(434518)
              , a = i(763812)
              , s = i(909436)
              , n = i(392358)
              , r = i(458840)
              , c = i(983567)
              , l = i(751962)
              , d = i(866743)
              , u = i(330856)
              , h = i(138586)
              , p = i(993110)
              , _ = i(319756)
              , v = i(348191)
              , m = i(984578)
              , b = i(26530)
              , g = i(70148)
              , y = (0,
            a._)("_identity")
              , f = (0,
            a._)("_handlePlay")
              , S = (0,
            a._)("_handlePlayTrack");
            class P {
                showAllAudio() {
                    this.playlistList.classList.add(`${P.playListClass}__list--all`)
                }
                shufflePlayList() {
                    this.showAllAudio(),
                    this.player.playPlaylist(this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash, this.playlist.context, !0)
                }
                addPlayList() {
                    s.AudioUtils.followPlaylist(this.addText, this.playlist.ownerId, this.playlist.albumId, this.playlist.followHash),
                    this.add.classList.toggle(`${P.actionButtonsClass}--add--added`),
                    this.add.classList.contains(`${P.actionButtonsClass}--add--added`) ? this.addText.innerText = this.addText.dataset.textFollowed : this.addText.innerText = this.addText.dataset.textFollow
                }
                sharePlayList(e) {
                    (0,
                    r.shareAudioPlaylist)(e, this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash)
                }
                playNextSong() {
                    this.player.playNextPlaylist(this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash, this.playlist.context)
                }
                copyPlayListLink() {
                    s.AudioUtils.copyPlaylistLink(this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash)
                }
                handleTurnDiscover() {
                    s.AudioUtils.turnPlaylistDiscover(this.playlist.ownerId, this.playlist.albumId)
                }
                playSong() {
                    this.isCurrentPlaylist() ? this.player.isPlaying() ? this.player.pauseByButton() : this.player.playList() : this.player.playPlaylist(this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash, this.playlist.context)
                }
                toggleIcon(e) {
                    this.play.classList[e ? "add" : "remove"](`${P.playListClass}__stop`),
                    this.play.classList[e ? "remove" : "add"](`${P.playListClass}__play`)
                }
                onPlay() {
                    this.isCurrentPlaylist() && this.toggleIcon(!0)
                }
                onStop() {
                    this.isCurrentPlaylist() && this.toggleIcon(!1)
                }
                isCurrentPlaylist() {
                    const e = this.player.getCurrentAudio();
                    return Boolean(e) && this.playlist.list.some((t => t[0] === e[0] && t[1] === e[1]))
                }
                handleEditPlaylist() {
                    (0,
                    u.editPlaylist)(this.playlist.ownerId, this.playlist.albumId, "edit", {
                        onPlaylistSave: () => nav.reload()
                    })
                }
                handleDeletePlaylist() {
                    p.AudioPage.deletePlaylist(this.playlist.ownerId, this.playlist.albumId, this.playlist.editHash)
                }
                handleAddToGroup() {
                    (0,
                    d.addToGroupBox)(this.playlist.ownerId, this.playlist.albumId, this.playlist.accessHash)
                }
                handleRemoveFromGroup() {
                    (0,
                    l.removeFromGroup)(this.playlist.ownerId, this.playlist.albumId, this.playlist.followHash)
                }
                constructor(e, t) {
                    Object.defineProperty(this, y, {
                        get: w,
                        set: void 0
                    }),
                    Object.defineProperty(this, f, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, S, {
                        writable: !0,
                        value: void 0
                    }),
                    (0,
                    o._)(this, f)[f] = ({playlistIdentity: e, trackIdentity: t}) => {
                        this.statsCollector.logPlay({
                            playlistIdentity: e,
                            trackIdentity: t
                        })
                    }
                    ,
                    (0,
                    o._)(this, S)[S] = ({playlistIdentity: e, trackIdentity: t, trackPosition: i}) => {
                        this.statsCollector.logPlayTrack({
                            playlistIdentity: e,
                            trackIdentity: t,
                            trackPosition: i
                        })
                    }
                    ;
                    const i = (0,
                    _.ensureDIRootWebContainer)()
                      , a = i.resolve(b.EmitterFactory);
                    this.statsCollector = i.resolve(v.MusicPlaylistStatsCollector),
                    this.playlistElement = document.querySelector(`#playlist-${e}`),
                    this.playlist = t,
                    this.playlistList = this.playlistElement.querySelector(`.${P.playListClass}__list`),
                    this.playlistListAll = this.playlistList.querySelector(`.${P.actionButtonsClass}--all`),
                    this.audio = {},
                    this.audioElements = this.playlistList.querySelectorAll(`.${P.playListClass}__audioRow`);
                    for (let e = 0; e < this.audioElements.length; e++)
                        this.audio[this.audioElements[e].dataset.fullId] = this.audioElements[e];
                    this.body = this.playlistElement.querySelector(`.${P.playListClass}__body`),
                    this.shuffle = this.body.querySelector(`.${P.actionButtonsClass}--shuffle`),
                    this.actions = this.playlistElement.querySelector(`.${P.playListClass}__actions`),
                    this.actions && (this.add = this.actions.querySelector(`.${P.actionButtonsClass}--add`),
                    this.add && (this.addText = this.add.querySelector(`.${P.actionButtonsClass}--add__text`),
                    this.add.addEventListener("click", this.addPlayList.bind(this))),
                    this.share = this.actions.querySelector(`.${P.actionButtonsClass}--share`),
                    this.share && this.share.addEventListener("click", this.sharePlayList.bind(this))),
                    this.menu = this.playlistElement.querySelector(`.${P.menuButtonsClass}__inner`),
                    this.menu && (this.playNext = this.menu.querySelector(`.${P.menuButtonsClass}__item--playNext`),
                    this.editPlaylist = this.menu.querySelector(`.${P.menuButtonsClass}__item--editPlaylist`),
                    this.deletePlaylist = this.menu.querySelector(`.${P.menuButtonsClass}__item--deletePlaylist`),
                    this.addToGroup = this.menu.querySelector(`.${P.menuButtonsClass}__item--addToGroup`),
                    this.removeFromGroup = this.menu.querySelector(`.${P.menuButtonsClass}__item--removeFromGroup`),
                    this.copyLink = this.menu.querySelector(`.${P.menuButtonsClass}__item--copyLink`),
                    this.turnDiscover = this.menu.querySelector(`.${P.menuButtonsClass}__item--turn_discover`)),
                    this.play = this.playlistElement.querySelector(`.${P.playButtonClass}`),
                    this.play && (this.player = (0,
                    c.getAudioPlayer)(),
                    this.toggleIcon(this.player.isPlaying()),
                    this.player.addPlaylist(new h.AudioPlaylist(this.playlist,this.playlist.ownerId,this.playlist.albumId)),
                    this.player.on(this.playlist.context, n.events.PLAY, this.onPlay.bind(this)),
                    this.player.on(this.playlist.context, n.events.PAUSE, this.onStop.bind(this)),
                    this.player.on(this.playlist.context, n.events.STOP, this.onStop.bind(this)),
                    this.play.addEventListener("click", this.playSong.bind(this))),
                    this.playlistListAll && this.playlistListAll.addEventListener("click", this.showAllAudio.bind(this)),
                    this.shuffle && this.shuffle.addEventListener("click", this.shufflePlayList.bind(this)),
                    this.playNext && this.playNext.addEventListener("click", this.playNextSong.bind(this)),
                    this.editPlaylist && this.editPlaylist.addEventListener("click", this.handleEditPlaylist.bind(this)),
                    this.deletePlaylist && this.deletePlaylist.addEventListener("click", this.handleDeletePlaylist.bind(this)),
                    this.addToGroup && this.addToGroup.addEventListener("click", this.handleAddToGroup.bind(this)),
                    this.removeFromGroup && this.removeFromGroup.addEventListener("click", this.handleRemoveFromGroup.bind(this)),
                    this.copyLink && this.copyLink.addEventListener("click", this.copyPlayListLink.bind(this)),
                    this.turnDiscover && this.turnDiscover.addEventListener("click", this.handleTurnDiscover.bind(this));
                    const s = this.playlist.list
                      , r = this.audioElements
                      , l = Array.from(r)
                      , d = new m.MusicPlaylistLayerListener({
                        playlistIdentity: (0,
                        o._)(this, y)[y],
                        trackTuples: s,
                        trackRows: l,
                        container: this.playlistElement,
                        emitterFactory: a,
                        playButtonClassName: P.playButtonClass
                    });
                    d.events.on("play", (0,
                    o._)(this, f)[f]),
                    d.events.on("playTrack", (0,
                    o._)(this, S)[S]),
                    this.statsCollector.logOpen({
                        playlistIdentity: (0,
                        o._)(this, y)[y]
                    })
                }
            }
            function w() {
                return new g.OwnedIdentity({
                    id: this.playlist.albumId,
                    ownerId: this.playlist.ownerId,
                    accessKey: this.playlist.accessHash
                })
            }
            P.playListClass = "AudioPlaylistSnippet",
            P.playButtonClass = `${P.playListClass}__play`,
            P.actionButtonsClass = "ActionButton",
            P.menuButtonsClass = "ActionsMenu"
        }
        ,
        833141: (e, t, i) => {
            i.d(t, {
                parseAudioPlaylistIdentityFromHref: () => s
            });
            var o = i(70148);
            const a = /\/music\/(playlist|album)\/(-?\d+_\d+)/i;
            function s(e) {
                if (!e)
                    return;
                const t = e.match(a);
                if (!t)
                    return;
                const {2: i} = t;
                if (i)
                    try {
                        return o.OwnedIdentity.fromRawId(i)
                    } catch {
                        return
                    }
            }
        }
        ,
        44337: (e, t, i) => {
            i.d(t, {
                AudioPlayerTrackRef: () => o.AudioPlayerTrackRef
            });
            var o = i(521525)
        }
        ,
        521525: (e, t, i) => {
            var o;
            i.d(t, {
                AudioPlayerTrackRef: () => o
            }),
            function(e) {
                e.SnippetFeed = "snippet_feed",
                e.FeedPost = "feed",
                e.FeedRecommendation = "news_feed_recommended_playlists",
                e.Im = "im",
                e.UserProfile = "user_profile",
                e.Group = "group_profile",
                e.UserWall = "user_wall",
                e.GroupWall = "group_wall",
                e.Reply = "replies",
                e.Wiki = "wiki"
            }(o || (o = {}))
        }
        ,
        978367: (e, t, i) => {
            i.d(t, {
                AudioPlayerStopAudioEventReason: () => a.AudioPlayerStopAudioEventReason,
                AudioPlayerTrackRef: () => o.AudioPlayerTrackRef
            });
            var o = i(44337)
              , a = i(426389)
        }
        ,
        549831: (e, t, i) => {
            i.d(t, {
                useValueRef: () => a
            });
            var o = i(296540);
            function a(e) {
                const t = (0,
                o.useRef)(e);
                return t.current = e,
                t
            }
        }
        ,
        393856: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboarding: () => k
            });
            var o = i(434518)
              , a = i(763812)
              , s = i(716860)
              , n = i(553608)
              , r = i(867366)
              , c = i(965539)
              , l = i(459899)
              , d = i(246429)
              , u = i(909436)
              , h = i(983567)
              , p = i(502722)
              , _ = i(754866)
              , v = i(558137)
              , m = i(540462)
              , b = (0,
            a._)("_audioPage")
              , g = (0,
            a._)("_musicMixBlockEvents")
              , y = (0,
            a._)("_fetchService")
              , f = (0,
            a._)("_needSkipOnbording")
              , S = (0,
            a._)("_isFinalScreenAvailableForRestoration")
              , P = (0,
            a._)("_restoreFinalScreen")
              , w = (0,
            a._)("_show")
              , A = (0,
            a._)("_connectEvents");
            class k {
                init() {
                    (0,
                    o._)(this, A)[A]()
                }
                constructor() {
                    Object.defineProperty(this, w, {
                        value: E
                    }),
                    Object.defineProperty(this, A, {
                        value: I
                    }),
                    Object.defineProperty(this, b, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, g, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, y, {
                        writable: !0,
                        value: void 0
                    }),
                    (0,
                    o._)(this, b)[b] = l.AudioPageProxy.ensure(),
                    (0,
                    o._)(this, g)[g] = p.AudioCatalogMusicMixEmitter.ensure().listenable,
                    (0,
                    o._)(this, y)[y] = new s.AudioRecomsOnboardingFetchService
                }
            }
            async function E(e) {
                const t = (0,
                o._)(k, S)[S];
                if (e?.onlyFinalScreen && !t)
                    return;
                if (e?.checkNeedSkipOnboarding && (0,
                o._)(k, f)[f])
                    return void e?.onClose?.();
                const i = document.querySelector("#box_loader")
                  , a = document.querySelector("#box_layer_wrap");
                (0,
                _.show)(i),
                (0,
                _.show)(a),
                (0,
                d.boxRefreshCoords)(i);
                const s = await (0,
                o._)(this, y)[y].fetch(e?.fetchParams);
                (0,
                _.hide)(i);
                let n = !1;
                if (e?.restoreFinalScreen && t)
                    (0,
                    o._)(k, P)[P](),
                    n = !0;
                else if (s) {
                    new c.AudioRecomsOnboardingMainScreen(s,{
                        onClose: e?.onClose,
                        onFinish: e?.onFinish
                    }).show(),
                    n = !0
                }
                n || (e?.onClose?.(),
                (0,
                _.hide)(a))
            }
            function I() {
                const e = (0,
                m.partConfigEnabled)("audio_recoms_onboarding_entry_points");
                (0,
                o._)(this, b)[b].events.on(l.AudioPageEventType.AudioRecomsOnboardingShowRequested, ( ({reason: t, payload: i}) => {
                    switch (t) {
                    case l.AudioRecomsOnboardingShowRequestedEventReason.AudioPageInit:
                        return void (0,
                        o._)(this, w)[w]({
                            onlyFinalScreen: !0,
                            restoreFinalScreen: !0,
                            fetchParams: {
                                loadScript: !0
                            },
                            onFinish() {
                                window.nav.reload()
                            }
                        });
                    case l.AudioRecomsOnboardingShowRequestedEventReason.Navigation:
                        return void (0,
                        o._)(this, w)[w]({
                            restoreFinalScreen: !0,
                            onClose: () => {
                                (0,
                                o._)(k, f)[f] = !0,
                                (0,
                                o._)(this, y)[y].notifySkipOnboarding(),
                                window.nav.change({
                                    popup: !1
                                })
                            }
                            ,
                            onFinish: () => {
                                window.nav.change({
                                    popup: !1
                                }),
                                window.nav.reload()
                            }
                        });
                    case l.AudioRecomsOnboardingShowRequestedEventReason.RecommendationsPlaylistOpenButton:
                        {
                            if (!e)
                                return;
                            const {id: t, ownerId: a, accessHash: s, context: n} = i;
                            return void (0,
                            o._)(this, w)[w]({
                                checkNeedSkipOnboarding: !0,
                                onClose: () => {
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, y)[y].notifySkipOnboarding(),
                                    u.AudioUtils.showAudioPlaylist(a, t, s, n)
                                }
                                ,
                                onFinish: async () => {
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, b)[b].reloadGeneralSectionData(( () => {
                                        u.AudioUtils.showAudioPlaylist(a, t, s, n)
                                    }
                                    ))
                                }
                            })
                        }
                    case l.AudioRecomsOnboardingShowRequestedEventReason.RecommendationsPlaylistPlayButton:
                        {
                            if (!e)
                                return;
                            const {id: t, ownerId: a, accessHash: s, context: n} = i;
                            return void (0,
                            o._)(this, w)[w]({
                                checkNeedSkipOnboarding: !0,
                                onClose: () => {
                                    const e = (0,
                                    h.getAudioPlayer)();
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, y)[y].notifySkipOnboarding(),
                                    e.playPlaylist(a, t, s, n)
                                }
                                ,
                                onFinish: () => {
                                    const e = (0,
                                    h.getAudioPlayer)();
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, b)[b].reloadGeneralSectionData(( () => {
                                        e.playPlaylist(a, t, s, n)
                                    }
                                    ))
                                }
                            })
                        }
                    case l.AudioRecomsOnboardingShowRequestedEventReason.VibeRecommendationsPlaylistPlayButton:
                        {
                            if (!e)
                                return;
                            const {id: t, ownerId: a, accessHash: s, context: n} = i;
                            return void (0,
                            o._)(this, w)[w]({
                                checkNeedSkipOnboarding: !0,
                                onClose: () => {
                                    const e = (0,
                                    h.getAudioPlayer)();
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, y)[y].notifySkipOnboarding(),
                                    e.playPlaylist(a, t, s, n)
                                }
                                ,
                                onFinish: () => {
                                    const e = (0,
                                    h.getAudioPlayer)();
                                    (0,
                                    o._)(k, f)[f] = !0,
                                    (0,
                                    o._)(this, b)[b].reloadGeneralSectionData(( () => {
                                        e.playPlaylist(a, t, s, n)
                                    }
                                    ))
                                }
                            })
                        }
                    case l.AudioRecomsOnboardingShowRequestedEventReason.Unknown:
                        return console.warn("AudioRecomsOnboarding is shown for an unknown reason"),
                        void (0,
                        o._)(this, w)[w]()
                    }
                }
                )),
                (0,
                o._)(this, g)[g].once(p.AudioCatalogMusicMixBlockEventType.AudioRecomsOnboardingShowRequested, ( ({onHideOnboarding: t}) => {
                    e && (0,
                    o._)(this, w)[w]({
                        checkNeedSkipOnboarding: !0,
                        onClose: () => {
                            (0,
                            o._)(k, f)[f] = !0,
                            (0,
                            o._)(this, y)[y].notifySkipOnboarding(),
                            t()
                        }
                        ,
                        onFinish: () => {
                            (0,
                            o._)(k, f)[f] = !0,
                            (0,
                            o._)(this, b)[b].reloadGeneralSectionData(( () => {
                                t()
                            }
                            ))
                        }
                    })
                }
                ))
            }
            Object.defineProperty(k, f, {
                get: function() {
                    return Boolean(n.vkLocalStorage.getItem(r.AUDIO_PLAYER_ENUMS.AUDIO_RECOMS_ONBOARDING_NEED_SKIP_LS_KEY))
                },
                set: function(e) {
                    n.vkLocalStorage.setItem(r.AUDIO_PLAYER_ENUMS.AUDIO_RECOMS_ONBOARDING_NEED_SKIP_LS_KEY, e)
                }
            }),
            Object.defineProperty(k, S, {
                get: function() {
                    return Boolean(n.vkLocalStorage.getItem(r.AUDIO_PLAYER_ENUMS.ONBOARDING_ARTISTS_LS_KEY))
                },
                set: void 0
            }),
            Object.defineProperty(k, P, {
                value: function() {
                    const e = n.vkLocalStorage.getItem(r.AUDIO_PLAYER_ENUMS.ONBOARDING_ARTISTS_LS_KEY);
                    if (e)
                        try {
                            const t = JSON.parse(e)
                              , i = new c.AudioRecomsOnboardingMainScreen({
                                artists: [],
                                relatedCount: 0,
                                nextFrom: "",
                                hash: ""
                            },{
                                onFinish: () => {
                                    window.nav.reload()
                                }
                            });
                            return i.box.show(),
                            i.showFinalScreenAfterDisconnect(t),
                            !0
                        } catch (e) {
                            throw new Error("Error when trying to restore the final audio recoms onboarding screen from LocalStorage",{
                                cause: e
                            })
                        }
                    return !1
                }
            }),
            k.ensure = (0,
            v.makeSharedState)("AudioRecomsOnboarding", ( () => new k), {
                version: 1
            })
        }
        ,
        41579: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboardingFetchService: () => n
            });
            var o = i(52016)
              , a = i(319756)
              , s = i(761520);
            class n {
                async fetch(e) {
                    const t = await s.ajax.promisifiedPost("al_audio.php?act=get_recoms_onboarding", e);
                    return t?.at(0) ?? null
                }
                async notifySkipOnboarding() {
                    await this.catalogApi.hideBlock({
                        block_id: "default:audio:onboarding_window_ca1"
                    })
                }
                constructor() {
                    this.catalogApi = (0,
                    a.ensureDIRootWebContainer)().resolve(o.CatalogApi)
                }
            }
        }
        ,
        716860: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboardingFetchService: () => o.AudioRecomsOnboardingFetchService
            });
            var o = i(41579)
        }
        ,
        150548: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboarding: () => o.AudioRecomsOnboarding
            });
            var o = i(393856)
        }
        ,
        823291: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboardingFinalScreen: () => S
            });
            var o = i(434518)
              , a = i(763812)
              , s = i(535130)
              , n = i(593159)
              , r = i(754866)
              , c = i(866467);
            const l = "audio_onboarding";
            var d = (0,
            a._)("_titleInterval")
              , u = (0,
            a._)("_startAnim")
              , h = (0,
            a._)("_progressAnim")
              , p = (0,
            a._)("_successAnimation")
              , _ = (0,
            a._)("_artists")
              , v = (0,
            a._)("_box")
              , m = (0,
            a._)("_destroyProgressScreen")
              , b = (0,
            a._)("_addArtistImages")
              , g = (0,
            a._)("_initFinalAnimation")
              , y = (0,
            a._)("_initProgressAnimation")
              , f = (0,
            a._)("_initTitleUpdate");
            class S {
                setArtists(e) {
                    (0,
                    o._)(this, _)[_] = e
                }
                showProgressScreen() {
                    (0,
                    o._)(this, v)[v].content((0,
                    n.getTemplate)("audio_recoms_onboarding_progress_box")),
                    (0,
                    o._)(this, v)[v].removeButtons(),
                    (0,
                    o._)(this, v)[v].setOptions({
                        hideButtons: !0
                    });
                    const e = (0,
                    o._)(this, v)[v].bodyNode.querySelector(".RecomsOnboarding__progressTitle");
                    e instanceof HTMLElement && (0,
                    o._)(this, f)[f](e);
                    const t = (0,
                    o._)(this, v)[v].bodyNode.querySelector(".RecomsOnboarding__progressAnimation");
                    t instanceof HTMLElement && (0,
                    o._)(this, y)[y](t)
                }
                showSuccessScreen() {
                    const e = (0,
                    r.se)((0,
                    n.getTemplate)("audio_recoms_onboarding_final_box"));
                    (0,
                    o._)(this, b)[b](e),
                    (0,
                    o._)(this, v)[v].bodyNode.insertAdjacentElement("afterbegin", e),
                    (0,
                    o._)(this, g)[g](e),
                    (0,
                    o._)(this, v)[v].bodyNode.insertAdjacentElement("afterbegin", e)
                }
                destroySuccessScreen() {
                    (0,
                    o._)(this, p)[p]?.destroy()
                }
                constructor(e, t=[]) {
                    Object.defineProperty(this, m, {
                        value: P
                    }),
                    Object.defineProperty(this, b, {
                        value: w
                    }),
                    Object.defineProperty(this, g, {
                        value: A
                    }),
                    Object.defineProperty(this, y, {
                        value: k
                    }),
                    Object.defineProperty(this, f, {
                        value: E
                    }),
                    Object.defineProperty(this, d, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, u, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, h, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, p, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, _, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, v, {
                        writable: !0,
                        value: void 0
                    }),
                    (0,
                    o._)(this, _)[_] = [],
                    (0,
                    o._)(this, v)[v] = e,
                    (0,
                    o._)(this, _)[_] = t
                }
            }
            function P() {
                void 0 !== (0,
                o._)(this, d)[d] && window.clearInterval((0,
                o._)(this, d)[d]),
                (0,
                o._)(this, u)[u]?.destroy(),
                (0,
                o._)(this, h)[h]?.destroy()
            }
            function w(e) {
                const t = e.querySelectorAll(".RecomsOnboarding__selectedArtist");
                let i = 0;
                t.forEach((e => {
                    (0,
                    o._)(this, _)[_][i] || (i = 0);
                    const t = (0,
                    o._)(this, _)[_][i];
                    i++,
                    t && (e.style.backgroundImage = `url(${t.image})`)
                }
                ))
            }
            async function A(e) {
                const t = document.createElement("div");
                t.className = "RecomsOnboarding__finalAnimationContainer",
                e.prepend(t),
                (0,
                o._)(this, p)[p] = await s.LottieManager.loadAnimation({
                    group: l,
                    containers: [t],
                    animationUrl: "/images/lottie_icons/music_onboarding_final.json",
                    loop: !1
                });
                const i = e.querySelector(".RecomsOnboarding__progressTitle")
                  , a = e.querySelector(".RecomsOnboarding__tiles")
                  , n = e.querySelector(".RecomsOnboarding__selectedArtists");
                let r = !1
                  , c = !1
                  , d = !1;
                (0,
                o._)(this, p)[p].addEventListener("enterFrame", (e => {
                    i && e > 14 && !r && ((0,
                    o._)(this, m)[m](),
                    r = !0,
                    i.classList.add("RecomsOnboarding__progressTitle--appear")),
                    a && e > 10 && !c && (a.classList.add("RecomsOnboarding__tiles--appear"),
                    c = !0),
                    n && e > 30 && !d && (n.classList.add("RecomsOnboarding__selectedArtists--appear"),
                    d = !0)
                }
                ))
            }
            async function k(e) {
                const t = e.querySelector(".RecomsOnboarding__animationItem--start")
                  , i = e.querySelector(".RecomsOnboarding__animationItem--progress");
                if (!(t instanceof HTMLElement && i instanceof HTMLElement))
                    return;
                (0,
                o._)(this, u)[u] = await s.LottieManager.loadAnimation({
                    group: l,
                    containers: [t],
                    animationUrl: "/images/lottie_icons/music_onboarding_progress_start.json",
                    autoplay: !1,
                    loop: !1
                });
                const a = await s.LottieManager.loadAnimation({
                    group: l,
                    containers: [i],
                    animationUrl: "/images/lottie_icons/music_onboarding_progress.json",
                    autoplay: !1,
                    loop: !0
                });
                (0,
                o._)(this, h)[h] = a,
                a.hide(),
                (0,
                o._)(this, u)[u]?.addEventListener("loopComplete", ( () => {
                    a.show(),
                    a.play(),
                    (0,
                    o._)(this, u)[u]?.hide(),
                    (0,
                    o._)(this, u)[u]?.destroy()
                }
                ), {
                    once: !0
                }),
                (0,
                o._)(this, u)[u]?.play()
            }
            function E(e) {
                const t = [(0,
                c.getLang)("audio_recoms_onboarding_progress_text1"), (0,
                c.getLang)("audio_recoms_onboarding_progress_text2"), (0,
                c.getLang)("audio_recoms_onboarding_progress_text3"), (0,
                c.getLang)("audio_recoms_onboarding_progress_text4")];
                let i = 0;
                function a() {
                    return !!t[i] && (e.innerText = t[i],
                    i++,
                    !0)
                }
                a(),
                (0,
                o._)(this, d)[d] = window.setInterval(( () => {
                    a() || (window.clearInterval((0,
                    o._)(this, d)[d]),
                    (0,
                    o._)(this, d)[d] = void 0)
                }
                ), 1500)
            }
        }
        ,
        304622: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboardingMainScreen: () => Q
            });
            var o = i(434518)
              , a = i(763812)
              , s = i(270959)
              , n = i(593159)
              , r = i(586573)
              , c = i(866467)
              , l = i(754866)
              , d = i(257168)
              , u = i(740342)
              , h = i(678684)
              , p = i(823291)
              , _ = i(553608)
              , v = i(761520)
              , m = i(867366)
              , b = (0,
            a._)("_button")
              , g = (0,
            a._)("_itemsList")
              , y = (0,
            a._)("_searchItemsList")
              , f = (0,
            a._)("_relatedCount")
              , S = (0,
            a._)("_uiScroll")
              , P = (0,
            a._)("_loadingMore")
              , w = (0,
            a._)("_allArtistItems")
              , A = (0,
            a._)("_hash")
              , k = (0,
            a._)("_searchQuery")
              , E = (0,
            a._)("_isSearchActive")
              , I = (0,
            a._)("_allArtists")
              , q = (0,
            a._)("_selectedArtists")
              , x = (0,
            a._)("_nestingLevel")
              , T = (0,
            a._)("_selectedArtistsFromSearch")
              , L = (0,
            a._)("_relatedArtistsMap")
              , C = (0,
            a._)("_finalScreen")
              , O = (0,
            a._)("_searchArtists")
              , j = (0,
            a._)("_toggleSearch")
              , M = (0,
            a._)("_hide")
              , N = (0,
            a._)("_initInitialScreen")
              , R = (0,
            a._)("_loadMore")
              , D = (0,
            a._)("_loadSearchArtists")
              , F = (0,
            a._)("_finishOnboarding")
              , B = (0,
            a._)("_showFinalSuccessScreen")
              , U = (0,
            a._)("_getArtistsForFinalScreen")
              , z = (0,
            a._)("_canFinishOnboarding")
              , V = (0,
            a._)("_toggleArtistSelection")
              , $ = (0,
            a._)("_toggleFinishButton")
              , H = (0,
            a._)("_addSelectedFromSearch")
              , G = (0,
            a._)("_addRelatedArtists")
              , Y = (0,
            a._)("_addMoreArtists")
              , W = (0,
            a._)("_getNextArtistElement")
              , Z = (0,
            a._)("_addEventListeners")
              , K = (0,
            a._)("_getArtistItems");
            class Q {
                show() {
                    this.box.show(),
                    (0,
                    o._)(this, S)[S] = new r.default(this.box.bodyNode.querySelector(".RecomsOnboarding__listWrapper"),{
                        onmore: (0,
                        o._)(this, R)[R].bind(this)
                    })
                }
                showFinalScreenAfterDisconnect(e) {
                    (0,
                    o._)(this, C)[C] = new p.AudioRecomsOnboardingFinalScreen(this.box,e),
                    this.box.removeButtons(),
                    this.box.setOptions({
                        hideButtons: !0
                    }),
                    this.box.bodyNode.append((0,
                    l.se)('<div class="RecomsOnboarding__body RecomsOnboarding__body--final"></div>')),
                    (0,
                    o._)(this, B)[B]()
                }
                constructor({artists: e, relatedCount: t, nextFrom: i, hash: a}, n) {
                    Object.defineProperty(this, O, {
                        value: X
                    }),
                    Object.defineProperty(this, j, {
                        value: J
                    }),
                    Object.defineProperty(this, M, {
                        value: ee
                    }),
                    Object.defineProperty(this, N, {
                        value: te
                    }),
                    Object.defineProperty(this, R, {
                        value: ie
                    }),
                    Object.defineProperty(this, D, {
                        value: oe
                    }),
                    Object.defineProperty(this, F, {
                        value: ae
                    }),
                    Object.defineProperty(this, B, {
                        value: se
                    }),
                    Object.defineProperty(this, U, {
                        value: ne
                    }),
                    Object.defineProperty(this, z, {
                        value: re
                    }),
                    Object.defineProperty(this, V, {
                        value: ce
                    }),
                    Object.defineProperty(this, $, {
                        value: le
                    }),
                    Object.defineProperty(this, H, {
                        value: de
                    }),
                    Object.defineProperty(this, G, {
                        value: ue
                    }),
                    Object.defineProperty(this, Y, {
                        value: he
                    }),
                    Object.defineProperty(this, W, {
                        value: pe
                    }),
                    Object.defineProperty(this, Z, {
                        value: _e
                    }),
                    Object.defineProperty(this, K, {
                        value: ve
                    }),
                    Object.defineProperty(this, b, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, g, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, y, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, f, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, S, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, P, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, w, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, A, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, k, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, E, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, I, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, q, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, x, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, T, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, L, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, C, {
                        writable: !0,
                        value: void 0
                    }),
                    (0,
                    o._)(this, I)[I] = {},
                    (0,
                    o._)(this, q)[q] = {},
                    (0,
                    o._)(this, x)[x] = {},
                    (0,
                    o._)(this, T)[T] = {},
                    (0,
                    o._)(this, L)[L] = {},
                    (0,
                    o._)(this, f)[f] = t,
                    this.box = new s.MessageBox({
                        bodyStyle: "padding: 0",
                        width: 640,
                        containerClass: "RecomsOnboarding",
                        onHide: () => {
                            n?.onHide ? n.onHide() : Boolean((0,
                            o._)(this, C)[C]) ? n?.onFinish?.() : n?.onClose?.()
                        }
                    }),
                    (0,
                    o._)(this, A)[A] = a,
                    e.length && (0,
                    o._)(this, N)[N](e, i)
                }
            }
            function X(e) {
                (0,
                o._)(this, k)[k] = e.trim(),
                (0,
                o._)(this, k)[k] ? (0,
                o._)(this, D)[D]((0,
                o._)(this, k)[k]).then(( ({artists: e, nextFrom: t}) => {
                    (0,
                    o._)(this, y)[y].clear(),
                    (0,
                    o._)(this, y)[y].nextFrom = t,
                    (0,
                    o._)(this, j)[j](!0),
                    e.length ? (0,
                    o._)(this, Y)[Y](e) : (0,
                    o._)(this, y)[y].showNotFound()
                }
                )) : (0,
                o._)(this, j)[j](!1)
            }
            function J(e) {
                (0,
                o._)(this, E)[E] = e,
                e ? ((0,
                o._)(this, g)[g].hide(),
                (0,
                o._)(this, y)[y].show()) : ((0,
                o._)(this, H)[H](),
                (0,
                o._)(this, g)[g].show(),
                (0,
                o._)(this, y)[y].hide(),
                (0,
                o._)(this, y)[y].clear())
            }
            function ee() {
                this.box.hide()
            }
            function te(e, t) {
                this.box.content((0,
                n.getTemplate)("audio_recoms_onboarding_box", {
                    artists: (0,
                    o._)(this, K)[K](e).join("")
                }));
                const i = this.box.bodyNode.querySelector(".RecomsOnboarding__list");
                if (!(i instanceof HTMLElement))
                    return;
                (0,
                o._)(this, w)[w] = e.reduce(( (e, t) => (e[t.id] = t,
                e)), {}),
                (0,
                o._)(this, b)[b] = this.box.addButton((0,
                c.getLang)("audio_continue"), (0,
                o._)(this, F)[F].bind(this), void 0, !0),
                (0,
                o._)(this, y)[y] = new h.ArtistsList(this.box.bodyNode.querySelector(".RecomsOnboarding__list--search"),""),
                (0,
                o._)(this, g)[g] = new h.ArtistsList(i,t),
                (0,
                o._)(this, $)[$](!1),
                (0,
                o._)(this, Z)[Z]();
                const a = (0,
                u.debounce)((0,
                o._)(this, O)[O].bind(this), 500);
                d.default.init("artist_onboarding", {
                    onChange: a
                })
            }
            function ie() {
                (0,
                o._)(this, P)[P] || ((0,
                o._)(this, E)[E] ? (0,
                o._)(this, y)[y].nextFrom && ((0,
                o._)(this, P)[P] = !0,
                (0,
                o._)(this, D)[D]((0,
                o._)(this, k)[k], (0,
                o._)(this, y)[y].nextFrom).then(( ({artists: e, nextFrom: t}) => {
                    (0,
                    o._)(this, P)[P] = !1,
                    (0,
                    o._)(this, Y)[Y](e),
                    (0,
                    o._)(this, y)[y].nextFrom = t
                }
                ))) : (0,
                o._)(this, g)[g].nextFrom && ((0,
                o._)(this, P)[P] = !0,
                v.ajax.post("al_audio.php?act=get_recoms_onboarding", {
                    start_from: (0,
                    o._)(this, g)[g].nextFrom
                }, {
                    onDone: ({artists: e, nextFrom: t}) => {
                        (0,
                        o._)(this, P)[P] = !1,
                        (0,
                        o._)(this, Y)[Y](e.filter((e => !(0,
                        o._)(this, I)[I][e.id]))),
                        (0,
                        o._)(this, g)[g].nextFrom = t
                    }
                })))
            }
            function oe(e, t="") {
                return new Promise(( (i, o) => {
                    v.ajax.post("/al_audio.php?act=search_artists", {
                        query: e,
                        start_from: t
                    }, {
                        onDone: i,
                        onFail: o
                    })
                }
                ))
            }
            function ae() {
                if (!(0,
                o._)(this, z)[z]())
                    return;
                const e = Object.keys((0,
                o._)(this, q)[q])
                  , t = (0,
                o._)(this, U)[U]();
                _.vkLocalStorage.setItem(m.AUDIO_PLAYER_ENUMS.ONBOARDING_ARTISTS_LS_KEY, JSON.stringify(t)),
                (0,
                o._)(this, C)[C] = new p.AudioRecomsOnboardingFinalScreen(this.box,t),
                Promise.all([new Promise(( (t, i) => {
                    v.ajax.post("/al_audio.php?act=finish_recoms_onboarding", {
                        artists: e,
                        hash: (0,
                        o._)(this, A)[A]
                    }, {
                        onDone: e => t(e),
                        onFail: () => i()
                    })
                }
                )), new Promise((e => setTimeout(e, 6e3)))]).finally(( () => (0,
                o._)(this, B)[B]())),
                (0,
                o._)(this, C)[C].showProgressScreen()
            }
            function se() {
                (0,
                o._)(this, C)[C].showSuccessScreen(),
                _.vkLocalStorage.removeItem(m.AUDIO_PLAYER_ENUMS.ONBOARDING_ARTISTS_LS_KEY),
                setTimeout(( () => {
                    this.box.hide(),
                    (0,
                    o._)(this, C)[C].destroySuccessScreen()
                }
                ), 4e3)
            }
            function ne() {
                const e = [];
                let t = [];
                for (let i in (0,
                o._)(this, q)[q])
                    if ((0,
                    o._)(this, q)[q].hasOwnProperty(i)) {
                        if (!(e.length < 7))
                            break;
                        e.push((0,
                        o._)(this, w)[w][i]),
                        (0,
                        o._)(this, L)[L][i] && (t = t.concat((0,
                        o._)(this, L)[L][i]))
                    }
                if (e.length < 7)
                    for (let i of t) {
                        if (!(e.length < 7))
                            break;
                        e.push((0,
                        o._)(this, w)[w][i])
                    }
                return e
            }
            function re() {
                return Object.keys((0,
                o._)(this, q)[q]).length >= 5
            }
            function ce(e) {
                const t = e.dataset.id;
                if (!t)
                    return !1;
                const i = !(0,
                o._)(this, q)[q][t];
                [(0,
                o._)(this, g)[g], (0,
                o._)(this, y)[y]].forEach(( ({container: e}) => {
                    e.querySelectorAll(`[data-id='${t}']`).forEach((e => {
                        e.classList.toggle("RecomsOnboarding__item--selected", i)
                    }
                    ))
                }
                )),
                i ? ((0,
                o._)(this, q)[q][t] = !0,
                (0,
                o._)(this, I)[I][t] = !0,
                !e.classList.contains("RecomsOnboarding__item--hasRelated") && ((0,
                o._)(this, x)[x][t] || 0) < 3 && (e.classList.add("RecomsOnboarding__item--hasRelated"),
                (0,
                o._)(this, G)[G](t))) : delete (0,
                o._)(this, q)[q][t],
                (0,
                o._)(this, E)[E] && i && ((0,
                o._)(this, T)[T][t] = (0,
                o._)(this, w)[w][t]),
                !i && (0,
                o._)(this, T)[T][t] && delete (0,
                o._)(this, T)[T][t],
                (0,
                o._)(this, $)[$]((0,
                o._)(this, z)[z]())
            }
            function le(e) {
                (0,
                o._)(this, b)[b].disabled = !e,
                (0,
                o._)(this, b)[b].classList.toggle("button_disabled", !e)
            }
            function de() {
                (0,
                o._)(this, g)[g].container.querySelectorAll(".RecomsOnboarding__item--fromSearch").forEach((e => e.remove()));
                const e = (0,
                o._)(this, g)[g].container.querySelector(".RecomsOnboarding__item");
                e instanceof HTMLElement && (0,
                o._)(this, Y)[Y](Object.values((0,
                o._)(this, T)[T]), e, "RecomsOnboarding__item--fromSearch")
            }
            function ue(e) {
                v.ajax.post("/al_audio.php?act=get_related_artists", {
                    artist_id: e,
                    count: 2 * (0,
                    o._)(this, f)[f]
                }, {
                    onDone: ({artists: t}) => {
                        t.forEach((t => (0,
                        o._)(this, x)[x][t.id] = ((0,
                        o._)(this, x)[x][e] || 0) + 1)),
                        (0,
                        o._)(this, L)[L][e] = t.map((e => e.id));
                        let i = t.filter((e => !(0,
                        o._)(this, I)[I][e.id]));
                        i = i.slice(0, (0,
                        o._)(this, f)[f]),
                        (0,
                        o._)(this, Y)[Y](i, (0,
                        o._)(this, W)[W](e))
                    }
                })
            }
            function he(e, t=null, i="") {
                const a = ((0,
                o._)(this, E)[E] ? (0,
                o._)(this, y)[y] : (0,
                o._)(this, g)[g]).container;
                if (e && e.length) {
                    e.forEach((e => (0,
                    o._)(this, w)[w][e.id] = e));
                    const s = (0,
                    o._)(this, K)[K](e)
                      , n = document.createElement("div");
                    n.innerHTML = s.join("");
                    const r = Array.from(n.children);
                    r.forEach((e => {
                        e.dataset.id && ((0,
                        o._)(this, q)[q][e.dataset.id] && e.classList.add("RecomsOnboarding__item--selected"),
                        i && e.classList.add(i),
                        t && a?.insertBefore(e, t))
                    }
                    )),
                    t || a.append(...r)
                }
            }
            function pe(e) {
                const t = ((0,
                o._)(this, E)[E] ? (0,
                o._)(this, y)[y] : (0,
                o._)(this, g)[g]).container.querySelector(`[data-id="${e}"]`);
                if (t)
                    return t.nextElementSibling instanceof HTMLElement ? t.nextElementSibling : null
            }
            function _e() {
                (0,
                o._)(this, g)[g].onSelect = e => (0,
                o._)(this, V)[V](e),
                (0,
                o._)(this, g)[g].onSelect = e => (0,
                o._)(this, V)[V](e),
                [(0,
                o._)(this, g)[g], (0,
                o._)(this, y)[y]].forEach(( ({container: e}) => {
                    e.addEventListener("click", (e => {
                        if (e.target instanceof HTMLElement) {
                            const t = e.target.closest(".RecomsOnboarding__item");
                            if (!(t instanceof HTMLElement))
                                return;
                            (0,
                            o._)(this, V)[V](t)
                        }
                    }
                    ))
                }
                ));
                const e = this.box.bodyNode.querySelector(".RecomsOnboarding__closeButton");
                e && e.addEventListener("click", (0,
                o._)(this, M)[M].bind(this))
            }
            function ve(e) {
                return e.map((e => ((0,
                o._)(this, I)[I][e.id] = !0,
                (0,
                n.getTemplate)("audio_recoms_onboarding_item", e))))
            }
        }
        ,
        965539: (e, t, i) => {
            i.d(t, {
                AudioRecomsOnboardingMainScreen: () => o.AudioRecomsOnboardingMainScreen
            });
            var o = i(304622);
            i(823291)
        }
        ,
        678684: (e, t, i) => {
            i.d(t, {
                ArtistsList: () => a
            });
            var o = i(866467);
            class a {
                initEvents() {
                    this.container.addEventListener("click", (e => {
                        if (e.target instanceof HTMLElement) {
                            const t = e.target.closest(".RecomsOnboarding__item");
                            if (!(t instanceof HTMLElement))
                                return;
                            this.onSelect && this.onSelect(t)
                        }
                    }
                    ))
                }
                hide() {
                    this.container.style.display = "none"
                }
                show() {
                    this.container.style.display = "flex"
                }
                clear() {
                    this.container.innerHTML = ""
                }
                showNotFound() {
                    const e = document.createElement("div");
                    e.className = "RecomsOnboarding__notFoundPlaceholder",
                    e.innerText = (0,
                    o.getLang)("audio_not_found"),
                    this.container.append(e)
                }
                constructor(e, t) {
                    this.container = e,
                    this.nextFrom = t
                }
            }
        }
        ,
        171851: (e, t, i) => {
            i.d(t, {
                AudioSnippetsStatCollector: () => n
            });
            var o = i(317216)
              , a = i(314309)
              , s = i(558137);
            class n {
                logOpenLinkEvent(e, t) {
                    this.actionCollector.logEvent({
                        type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                        [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                            event_category: "nav",
                            event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_FEED_DRILLDOWN,
                            event_subtype: e,
                            ...r(t)
                        }
                    })
                }
                logPlayEvent(e, t) {
                    this.actionCollector.logEvent({
                        type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                        [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                            event_category: "play",
                            event_type: o.EventItemType.AUDIO_SNIPPETS_START,
                            event_subtype: e,
                            ...r(t)
                        }
                    })
                }
                logPauseEvent(e, t) {
                    this.actionCollector.logEvent({
                        type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                        [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                            event_category: "play",
                            event_type: o.EventItemType.AUDIO_SNIPPETS_PAUSE,
                            event_subtype: e,
                            ...r(t)
                        }
                    })
                }
                logStopEvent(e, t) {
                    this.actionCollector.logEvent({
                        type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                        [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                            event_category: "play",
                            event_type: o.EventItemType.AUDIO_SNIPPETS_STOP,
                            event_subtype: e,
                            ...r(t)
                        }
                    })
                }
                constructor() {
                    this.logOpenPage = () => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "nav",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_FEED_OPEN
                            }
                        })
                    }
                    ,
                    this.logClosePage = () => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "nav",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_FEED_EXIT,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_OVERLAY
                            }
                        })
                    }
                    ,
                    this.logOpenArtistLink = e => {
                        this.logOpenLinkEvent(o.EventItemSubType.AUDIO_SNIPPETS_GOTO_ARTIST, e)
                    }
                    ,
                    this.logOpenAudioLink = e => {
                        this.logOpenLinkEvent(o.EventItemSubType.AUDIO_SNIPPETS_GOTO_TRACK, e)
                    }
                    ,
                    this.logOpenPlaylistLink = e => {
                        this.logOpenLinkEvent(o.EventItemSubType.AUDIO_SNIPPETS_GOTO_PLAYLIST, e)
                    }
                    ,
                    this.logPlayButtonClick = e => {
                        this.logPlayEvent(o.EventItemSubType.AUDIO_SNIPPETS_PLAY_BTN, e)
                    }
                    ,
                    this.logPlayAutoplay = e => {
                        this.logPlayEvent(o.EventItemSubType.AUDIO_SNIPPETS_AUTOPLAY, e)
                    }
                    ,
                    this.logNextButtonClick = e => {
                        this.logPlayEvent(o.EventItemSubType.AUDIO_SNIPPETS_NEXT_BTN, e)
                    }
                    ,
                    this.logPrevButtonClick = e => {
                        this.logPlayEvent(o.EventItemSubType.AUDIO_SNIPPETS_PREV_BTN, e)
                    }
                    ,
                    this.logPauseButtonClick = e => {
                        this.logPauseEvent(o.EventItemSubType.AUDIO_SNIPPETS_PLAY_BTN, e)
                    }
                    ,
                    this.logSessionTerminated = e => {
                        this.logPauseEvent(o.EventItemSubType.AUDIO_SNIPPETS_SESSION_TERMINATED, e)
                    }
                    ,
                    this.logPausedByVisibility = e => {
                        this.logPauseEvent(o.EventItemSubType.AUDIO_SNIPPETS_CLOSE, e)
                    }
                    ,
                    this.logPlayingError = e => {
                        this.logPauseEvent(o.EventItemSubType.AUDIO_SNIPPETS_ERROR, e)
                    }
                    ,
                    this.logStopAndPlayNext = e => {
                        this.logStopEvent(o.EventItemSubType.AUDIO_SNIPPETS_NEXT, e)
                    }
                    ,
                    this.logStopAndPlayPrev = e => {
                        this.logStopEvent(o.EventItemSubType.AUDIO_SNIPPETS_PREV, e)
                    }
                    ,
                    this.logStopAndAutoplayNext = e => {
                        this.logStopEvent(o.EventItemSubType.AUDIO_SNIPPETS_AUTOPLAY, e)
                    }
                    ,
                    this.logStopAndClosePage = e => {
                        this.logStopEvent(o.EventItemSubType.AUDIO_SNIPPETS_CLOSE, e)
                    }
                    ,
                    this.logPlayingChangeSource = e => {
                        this.logStopEvent(o.EventItemSubType.AUDIO_SNIPPETS_CHANGE_SOURCE, e)
                    }
                    ,
                    this.logAddAudioToMyMusic = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_ADDED,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_ADD_SNIPPET,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logDeleteAudioFromMyMusic = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_REMOVED,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_REMOVE_SNIPPET,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logNextSnippet = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_NEXT_SNIPPET,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_TAP,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logPrevSnippet = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_PREV_SNIPPET,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_TAP,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logNextPlaylist = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_FEED_PLAYLIST_UP,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_TAP,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logPrevPlaylist = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "action",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_FEED_PLAYLIST_DOWN,
                                event_subtype: o.EventItemSubType.AUDIO_SNIPPETS_TAP,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.logSnippetPlaylistEnd = e => {
                        this.actionCollector.logEvent({
                            type: o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM,
                            [o.ActionProductionStatEventTypes.TYPE_CATALOG_AUDIO_SNIPPET_ITEM]: {
                                event_category: "system",
                                event_type: o.EventItemType.AUDIO_SNIPPETS_SNIPPET_PLAYLIST_END,
                                ...r(e)
                            }
                        })
                    }
                    ,
                    this.productCollector = new a.ProductionStatCollector,
                    this.actionCollector = new a.ActionStatCollector(this.productCollector)
                }
            }
            function r(e) {
                return {
                    volume: e.volume,
                    audio_id: e.audio?.id,
                    audio_owner_id: e.audio?.ownerId,
                    audio_id_new: e.audioAddedId,
                    audio_owner_id_new: e.audioAddedOwnerId,
                    playlist_pos: e.playlistPosition,
                    timeline_position: e.timelinePosition,
                    playback_duration: e.playbackDuration,
                    track_code: e.trackCode,
                    progress_pos: e.progressPosition
                }
            }
            n.ensure = (0,
            s.makeSharedState)("AudioSnippetsStatCollector", ( () => new n), {
                version: 1
            })
        }
        ,
        126528: (e, t, i) => {
            i.d(t, {
                AudioSnippetsStatCollector: () => o.AudioSnippetsStatCollector
            });
            var o = i(171851)
        }
        ,
        273516: (e, t, i) => {
            i.d(t, {
                createAudioSnippetsPlayerService: () => c
            });
            var o = i(32489)
              , a = i(810780)
              , s = i(983567)
              , n = i(392358)
              , r = i(397034);
            function c({domain: e}) {
                const t = (0,
                s.getAudioPlayer)()
                  , i = r.AudioSnippetsPlayer.ensure()
                  , c = e.createEvent()
                  , l = e.createEvent()
                  , d = e.createEvent()
                  , u = e.createEvent()
                  , h = e.createEvent()
                  , p = e.createEvent()
                  , _ = i.getState()
                  , v = e.createStore(_.isPlaying)
                  , m = e.createStore(_.currentQueueState)
                  , b = e.createStore(_.playingQueueState)
                  , g = (0,
                o.restore)(u, 0)
                  , y = (0,
                o.restore)(h.map((e => e ? Math.floor(e) : e)), 0)
                  , f = e.createEvent()
                  , S = e.createEvent()
                  , P = e.createEvent()
                  , w = e.createEvent()
                  , A = e.createEvent()
                  , k = e.createEvent()
                  , E = e.createEvent()
                  , I = e.createEffect((e => {
                    i.queue.setState(e)
                }
                ))
                  , q = e.createEffect((e => {
                    i.addToQueue(...e)
                }
                ))
                  , x = e.createEffect(( ({reason: e, list: t, audio: o}) => {
                    i.queue.moveTo(e, t, o)
                }
                ))
                  , T = e.createEffect((async () => {
                    await i.playNext()
                }
                ))
                  , L = e.createEffect((async () => {
                    await i.playPrev()
                }
                ))
                  , C = e.createEffect((async ({audio: e, list: o, reason: a}) => {
                    await i.play(e, {
                        list: o,
                        volume: t.getVolume(),
                        reason: a
                    })
                }
                ))
                  , O = e.createEffect(( ({reason: e}) => {
                    i.stop(e),
                    p()
                }
                ))
                  , j = e.createEffect(( ({reason: e}) => {
                    i.pause(e)
                }
                ));
                return i.subscribe(n.events.PROGRESS_SNIPPET, ( (e, t) => {
                    (0,
                    a.spread)({
                        targets: {
                            setProgress: u,
                            setPlayerTime: h
                        }
                    })({
                        setProgress: +e.toFixed(2),
                        setPlayerTime: t
                    })
                }
                )),
                i.subscribe(n.events.SNIPPET_PLAYER_STATE_CHANGED, (e => {
                    d(e)
                }
                )),
                i.subscribe(n.events.SNIPPET_PLAYER_PLAY_NEXT_SNIPPET, f),
                i.subscribe(n.events.SNIPPET_PLAYER_PLAY_PREV_SNIPPET, S),
                i.subscribe(n.events.SNIPPET_PLAYER_SNIPPET_PLAYING_END, P),
                i.subscribe(n.events.SNIPPET_PLAYER_CHANGE_SOURCE, w),
                i.subscribe(n.events.SNIPPET_PLAYER_FAIL, A),
                i.subscribe(n.events.SNIPPET_PLAYER_PAUSED_BY_INCOMING_CALL, k),
                i.subscribe(n.events.SNIPPET_PLAYER_PAUSED_BY_VISIBILITY, E),
                (0,
                a.spread)({
                    source: d,
                    targets: {
                        isPlaying: v,
                        currentQueueState: m,
                        playingQueueState: b
                    }
                }),
                g.reset(b),
                (0,
                o.sample)({
                    clock: c,
                    target: e.createEffect(( () => {
                        i.reset()
                    }
                    ))
                }),
                (0,
                o.sample)({
                    clock: l,
                    target: I
                }),
                {
                    reset: c,
                    getQueueState: function() {
                        return i.queue.getState()
                    },
                    setQueueState: l,
                    addToQueueFx: q,
                    moveQueueFx: x,
                    playFx: C,
                    playNextFx: T,
                    playPrevFx: L,
                    stopFx: O,
                    pauseFx: j,
                    onPlayNext: f,
                    onPlayPrev: S,
                    onPlayingEnd: P,
                    onPlayingChangeSource: w,
                    onPlayingFail: A,
                    onPausedByIncomingCall: k,
                    onPausedByVisibility: E,
                    $isPlaying: v,
                    $currentState: m,
                    $playingState: b,
                    $progress: g,
                    $playbackDuration: y
                }
            }
        }
        ,
        402230: (e, t, i) => {
            i.d(t, {
                createAudioSnippetsPlayerService: () => o.createAudioSnippetsPlayerService
            });
            var o = i(273516)
        }
        ,
        422774: (e, t, i) => {
            i.d(t, {
                createAudioSnippetsStatCollectorService: () => h
            });
            var o = i(32489)
              , a = i(746573)
              , s = i(126528)
              , n = i(333780)
              , r = i(756166)
              , c = i(630082)
              , l = i(625523)
              , d = i(380948)
              , u = i(300164);
            function h({config: e, snippetsPlayerService: t, $activeList: i, $activeListIndex: h}) {
                const p = (0,
                a.getEffectorServiceDomain)(e)
                  , _ = s.AudioSnippetsStatCollector.ensure()
                  , v = p.createStore({})
                  , m = p.createStore({})
                  , b = (0,
                c.equals)(t.$progress, 1)
                  , {$currentAudioIndex: g} = (0,
                l.reshape)({
                    source: t.$currentState,
                    shape: {
                        $currentAudioIndex: e => e?.list?.audioIndex ?? 0
                    }
                })
                  , y = (0,
                c.equals)(g, i.map((e => e?.snippets ? e.snippets.length - 1 : -1)))
                  , f = (0,
                n.createLogFxWithCommonStatData)({
                    domain: p,
                    logEvent: _.logOpenPage
                })
                  , S = (0,
                u.createLogFxWithAudioSnippetsBlockStatData)({
                    domain: p,
                    logEvent: _.logClosePage,
                    $audioSnippetsBlockStatData: v
                })
                  , P = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logOpenArtistLink,
                    $audioSnippetStatData: m
                })
                  , w = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logOpenAudioLink,
                    $audioSnippetStatData: m
                })
                  , A = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logOpenPlaylistLink,
                    $audioSnippetStatData: m
                })
                  , k = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPlayButtonClick,
                    $audioSnippetStatData: m
                })
                  , E = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPlayAutoplay,
                    $audioSnippetStatData: m
                })
                  , I = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logNextButtonClick,
                    $audioSnippetStatData: m
                })
                  , q = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPrevButtonClick,
                    $audioSnippetStatData: m
                })
                  , x = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPauseButtonClick,
                    $audioSnippetStatData: m
                })
                  , T = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logSessionTerminated,
                    $audioSnippetStatData: m
                })
                  , L = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPausedByVisibility,
                    $audioSnippetStatData: m
                })
                  , C = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPlayingError,
                    $audioSnippetStatData: m
                })
                  , O = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logStopAndPlayNext,
                    $audioSnippetStatData: m
                })
                  , j = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logStopAndPlayPrev,
                    $audioSnippetStatData: m
                })
                  , M = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logStopAndAutoplayNext,
                    $audioSnippetStatData: m
                })
                  , N = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logStopAndClosePage,
                    $audioSnippetStatData: m
                })
                  , R = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPlayingChangeSource,
                    $audioSnippetStatData: m
                })
                  , D = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logAddAudioToMyMusic,
                    $audioSnippetStatData: m
                })
                  , F = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logDeleteAudioFromMyMusic,
                    $audioSnippetStatData: m
                })
                  , B = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logNextSnippet,
                    $audioSnippetStatData: m
                })
                  , U = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPrevSnippet,
                    $audioSnippetStatData: m
                })
                  , z = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logNextPlaylist,
                    $audioSnippetStatData: m
                })
                  , V = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logPrevPlaylist,
                    $audioSnippetStatData: m
                })
                  , $ = (0,
                r.createLogFxWithAudioSnippetStatData)({
                    domain: p,
                    logEvent: _.logSnippetPlaylistEnd,
                    $audioSnippetStatData: m
                });
                return (0,
                o.sample)({
                    clock: i,
                    fn: e => ({
                        trackCode: e?.trackCode
                    }),
                    target: v
                }),
                (0,
                o.sample)({
                    clock: (0,
                    o.combine)({
                        playerState: t.$currentState,
                        playbackDuration: t.$playbackDuration,
                        activeListIndex: h
                    }),
                    fn: ({playerState: e, playbackDuration: t, activeListIndex: i}) => ({
                        audio: e.audio,
                        progressPosition: (e?.list?.audioIndex ?? 0) + 1,
                        trackCode: e.audio?.trackCode,
                        playbackDuration: t,
                        timelinePosition: t,
                        playlistPosition: Number.isFinite(i) ? i + 1 : 0
                    }),
                    target: m
                }),
                (0,
                o.sample)({
                    clock: t.onPlayNext,
                    target: [E, B]
                }),
                (0,
                o.sample)({
                    clock: t.onPlayPrev,
                    target: U
                }),
                (0,
                o.sample)({
                    clock: t.onPlayingEnd,
                    target: M
                }),
                (0,
                o.sample)({
                    clock: t.onPlayingChangeSource,
                    target: R
                }),
                (0,
                o.sample)({
                    clock: t.onPlayingFail,
                    target: C
                }),
                (0,
                o.sample)({
                    clock: t.onPausedByIncomingCall,
                    target: T
                }),
                (0,
                o.sample)({
                    clock: t.onPausedByVisibility,
                    target: L
                }),
                (0,
                o.sample)({
                    clock: (0,
                    d.and)(b, y),
                    filter: e => e,
                    target: $.prepend(( () => {}
                    ))
                }),
                {
                    logOpenPageFx: f,
                    logClosePageFx: S,
                    logOpenArtistLinkFx: P,
                    logOpenAudioLinkFx: w,
                    logOpenPlaylistLinkFx: A,
                    logPlayButtonClickFx: k,
                    logPlayAutoplayFx: E,
                    logNextButtonClickFx: I,
                    logPrevButtonClickFx: q,
                    logPauseButtonClickFx: x,
                    logStopAndClosePageFx: N,
                    logStopAndPlayNextFx: O,
                    logStopAndPlayPrevFx: j,
                    logAddAudioToMyMusicFx: D,
                    logDeleteAudioFromMyMusicFx: F,
                    logNextSnippetFx: B,
                    logPrevSnippetFx: U,
                    logNextPlaylistFx: z,
                    logPrevPlaylistFx: V
                }
            }
        }
        ,
        100202: (e, t, i) => {
            i.d(t, {
                createAudioSnippetsStatCollectorService: () => o.createAudioSnippetsStatCollectorService
            });
            var o = i(422774)
        }
        ,
        756166: (e, t, i) => {
            i.d(t, {
                createLogFxWithAudioSnippetStatData: () => s
            });
            var o = i(32489)
              , a = i(333780);
            function s({$audioSnippetStatData: e, ...t}) {
                return (0,
                o.attach)({
                    source: e,
                    mapParams: (e, t) => ({
                        ...t,
                        ...e ?? {}
                    }),
                    effect: (0,
                    a.createLogFxWithCommonStatData)(t)
                })
            }
        }
        ,
        300164: (e, t, i) => {
            i.d(t, {
                createLogFxWithAudioSnippetsBlockStatData: () => s
            });
            var o = i(32489)
              , a = i(333780);
            function s({$audioSnippetsBlockStatData: e, ...t}) {
                return (0,
                o.attach)({
                    source: e,
                    mapParams: (e, t) => ({
                        ...t,
                        ...e ?? {}
                    }),
                    effect: (0,
                    a.createLogFxWithCommonStatData)(t)
                })
            }
        }
        ,
        333780: (e, t, i) => {
            i.d(t, {
                createLogFxWithCommonStatData: () => s
            });
            var o = i(983567)
              , a = i(957580);
            function s({logEvent: e, domain: t}) {
                const i = (0,
                o.getAudioPlayer)();
                return t.createEffect((t => {
                    e({
                        volume: Math.round(100 * (0,
                        a.unLogF)(i.getVolume())),
                        ...t ?? {}
                    })
                }
                ))
            }
        }
        ,
        198930: (e, t, i) => {
            i.d(t, {
                audioPageSnippetsTqRender: () => c
            });
            var o = i(338329)
              , a = i(142278)
              , s = i(179925)
              , n = i(622969);
            let r = null;
            function c() {
                (0,
                o.tq)().setStartupHandler("AudioPageSnippets/init", ( ({payload: {target: e}}) => {
                    if (!e)
                        throw new Error("Target is not defined");
                    const t = function() {
                        let e = history.state?.[l];
                        "number" != typeof e && (e = d++,
                        history.replaceState({
                            ...history.state ?? {},
                            [l]: e
                        }, ""));
                        return e
                    }();
                    r && r.pageId === t && n.audioPageSnippetsService.setState(r.state);
                    (0,
                    a.createReactInitiator)(s.AudioPageSnippetsApplicationEffector, e, {
                        onUnmounted: () => {
                            r = {
                                pageId: t,
                                state: n.audioPageSnippetsService.getState()
                            },
                            n.audioPageSnippetsService.reset()
                        }
                    }).render({})
                }
                ))
            }
            const l = "snippetsPageId";
            let d = 1
        }
        ,
        463410: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsBlock: () => r
            });
            var o = i(474848)
              , a = i(172656)
              , s = i(303800)
              , n = i(285056);
            function r({title: e, description: t, children: i}) {
                return (0,
                o.jsxs)(a.Group, {
                    children: [(0,
                    o.jsx)(s.Div, {
                        children: e
                    }), (0,
                    o.jsx)(s.Div, {
                        mode: "horizontal",
                        spacing: 0,
                        children: (0,
                        o.jsx)(n.Headline, {
                            level: "1",
                            children: t
                        })
                    }), (0,
                    o.jsx)(s.Div, {
                        children: i
                    })]
                })
            }
        }
        ,
        74375: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsBlock: () => o.AudioMobileAppsBlock
            });
            var o = i(463410)
        }
        ,
        668316: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsPopup: () => l
            });
            var o = i(474848)
              , a = i(211413)
              , s = i(694244)
              , n = i(506782)
              , r = i(303800)
              , c = i(608832);
            const l = ({title: e, text: t, qrSvg: i, onClose: l}) => (0,
            o.jsx)(a.MessageBoxModal, {
                onDestroy: l,
                width: 542,
                children: ({onClose: l}) => (0,
                o.jsxs)(s.ModalBox, {
                    children: [(0,
                    o.jsx)(a.MessageBoxDismissButton, {
                        onClick: l
                    }), (0,
                    o.jsxs)("div", {
                        className: c.default.root,
                        children: [(0,
                        o.jsx)("div", {
                            className: c.default.qrCode,
                            children: i
                        }), (0,
                        o.jsx)(n.ModalTextLayout, {
                            subheader: t,
                            subheaderMode: "primary",
                            children: (0,
                            o.jsx)(r.Div, {
                                paddingTop: 0,
                                children: e
                            })
                        })]
                    })]
                })
            })
        }
        ,
        475556: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsPopup: () => o.AudioMobileAppsPopup
            });
            var o = i(668316)
        }
        ,
        957562: (e, t, i) => {
            i.d(t, {
                AudioPageBreadcrumbs: () => n
            });
            var o = i(474848)
              , a = i(285056)
              , s = i(754204);
            function n(e) {
                return (0,
                o.jsx)(a.Title, {
                    level: "3",
                    weight: "3",
                    normalize: !0,
                    children: (0,
                    o.jsx)(s.Breadcrumbs, {
                        ...e
                    })
                })
            }
        }
        ,
        356139: (e, t, i) => {
            i.d(t, {
                AudioPageBreadcrumbs: () => o.AudioPageBreadcrumbs
            });
            var o = i(957562)
        }
        ,
        477686: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockNetworkError: () => d
            });
            var o = i(474848)
              , a = i(172656)
              , s = i(720836)
              , n = i(454154)
              , r = i(525652)
              , c = i(866467)
              , l = i(71374);
            function d({noTopRounded: e=!1, onActionClick: t}) {
                const i = (0,
                c.getLang)("audio_snippets_network_error_title")
                  , d = (0,
                c.getLang)("audio_snippets_network_error_description")
                  , u = (0,
                c.getLang)("audio_snippets_network_error_action");
                return (0,
                o.jsx)(a.Group, {
                    noTopRounded: e,
                    children: (0,
                    o.jsx)("div", {
                        className: l.default.container,
                        children: (0,
                        o.jsx)(s.Placeholder, {
                            icon: (0,
                            o.jsx)(r.Icon56ErrorOutline, {}),
                            header: i,
                            action: (0,
                            o.jsx)(n.Button, {
                                size: "m",
                                onClick: t,
                                children: u
                            }),
                            children: d
                        })
                    })
                })
            }
        }
        ,
        27583: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockNetworkError: () => o.AudioSnippetsBlockNetworkError
            });
            var o = i(477686)
        }
        ,
        185688: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockSkeleton: () => d
            });
            var o = i(474848)
              , a = i(211114)
              , s = i(303800)
              , n = i(157643)
              , r = i(260546)
              , c = i(413530)
              , l = i(313032);
            function d({noTopRounded: e, noBottomRounded: t}) {
                const i = function(e, t) {
                    const i = [12, 12, 12, 12];
                    e && (i[0] = i[1] = 0);
                    t && (i[2] = i[3] = 0);
                    return `${i[0]}px ${i[1]}px ${i[2]}px ${i[3]}px`
                }(e, t);
                return (0,
                o.jsx)(a.Card, {
                    style: {
                        borderRadius: i
                    },
                    className: l.default.container,
                    children: (0,
                    o.jsxs)("div", {
                        className: l.default.inner,
                        children: [(0,
                        o.jsx)(s.Div, {
                            className: l.default.before,
                            mode: "vertical",
                            spacing: 8,
                            children: (0,
                            o.jsx)(c.Slices, {})
                        }), (0,
                        o.jsxs)(s.Div, {
                            className: l.default.content,
                            mode: "vertical",
                            spacing: 0,
                            paddingTop: 0,
                            children: [(0,
                            o.jsx)(s.Div, {
                                className: l.default.contentCard,
                                spacing: 0,
                                paddingTop: 0,
                                children: (0,
                                o.jsx)(n.Skeleton, {
                                    width: 220,
                                    height: 220,
                                    borderRadius: 16
                                })
                            }), (0,
                            o.jsx)(s.Div, {
                                className: l.default.contentCell,
                                spacing: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                children: (0,
                                o.jsx)(r.SimpleCell, {
                                    subtitle: (0,
                                    o.jsx)(n.Skeleton, {
                                        width: 80,
                                        height: 8,
                                        borderRadius: 30
                                    }),
                                    hasHover: !1,
                                    hasActive: !1,
                                    children: (0,
                                    o.jsx)(n.Skeleton, {
                                        width: 140,
                                        height: 12,
                                        borderRadius: 30
                                    })
                                })
                            })]
                        }), (0,
                        o.jsx)(s.Div, {
                            className: l.default.after,
                            mode: "vertical",
                            spacing: 8,
                            children: (0,
                            o.jsx)(r.SimpleCell, {
                                before: (0,
                                o.jsx)("div", {
                                    className: l.default.afterCellBefore,
                                    children: (0,
                                    o.jsx)(n.Skeleton, {
                                        width: 48,
                                        height: 48,
                                        borderRadius: 6
                                    })
                                }),
                                subtitle: (0,
                                o.jsx)(n.Skeleton, {
                                    width: 60,
                                    height: 12,
                                    borderRadius: 30
                                }),
                                hasHover: !1,
                                hasActive: !1,
                                children: (0,
                                o.jsx)(n.Skeleton, {
                                    width: 140,
                                    height: 12,
                                    borderRadius: 30
                                })
                            })
                        })]
                    })
                })
            }
        }
        ,
        910013: (e, t, i) => {
            i.d(t, {
                Slices: () => l
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(157643)
              , n = i(895394);
            const r = [...new Array(10)];
            function c() {
                const e = r.map(( (e, t) => (0,
                o.jsx)("div", {
                    className: n.default.slice,
                    children: (0,
                    o.jsx)(s.Skeleton, {
                        height: 2,
                        borderRadius: 1,
                        noAnimation: !0
                    })
                }, t)));
                return (0,
                o.jsx)("div", {
                    className: n.default.container,
                    children: e
                })
            }
            const l = (0,
            a.memo)(c)
        }
        ,
        413530: (e, t, i) => {
            i.d(t, {
                Slices: () => o.Slices
            });
            var o = i(910013)
        }
        ,
        271560: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockSkeleton: () => o.AudioSnippetsBlockSkeleton
            });
            var o = i(185688)
        }
        ,
        178510: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlocksLayout: () => c
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(697157)
              , n = i(724192)
              , r = i(394014);
            const c = (0,
            a.forwardRef)(( ({children: e, skeletons: t, exception: i}, a) => {
                const c = (0,
                s.useExternRef)(a);
                return (0,
                n.useScrollParentClassName)(r.default.scrollParent, c),
                (0,
                o.jsx)("div", {
                    ref: c,
                    children: [...e, ...i ? [i] : t].map(( (e, t) => (0,
                    o.jsx)("div", {
                        className: r.default.block,
                        children: e
                    }, t)))
                })
            }
            ))
        }
        ,
        724192: (e, t, i) => {
            i.d(t, {
                useScrollParentClassName: () => a
            });
            var o = i(296540);
            function a(e, t) {
                const i = t.current;
                (0,
                o.useLayoutEffect)(( () => {
                    if (!i)
                        return;
                    const t = s(i) || document.documentElement
                      , o = (e ?? "").split(/\n+/).filter(Boolean);
                    return o.length ? (t.classList.add(...o),
                    () => {
                        t.classList.remove(...o)
                    }
                    ) : void 0
                }
                ), [i, e])
            }
            function s(e) {
                const t = e.parentElement;
                return t ? t === document.body ? document.documentElement : t.scrollHeight > t.clientHeight ? t : s(t) : null
            }
        }
        ,
        484462: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlocksLayout: () => o.AudioSnippetsBlocksLayout
            });
            var o = i(178510)
        }
        ,
        500222: (e, t, i) => {
            i.d(t, {
                ContainOptimization: () => n
            });
            var o = i(474848)
              , a = i(8520)
              , s = i(959473);
            function n({height: e, children: t}) {
                return (0,
                o.jsx)("div", {
                    style: {
                        height: e
                    },
                    className: (0,
                    a.classNames)(s.default.container, e ?? s.default.fixed),
                    children: t
                })
            }
        }
        ,
        797879: (e, t, i) => {
            i.d(t, {
                ContainOptimization: () => o.ContainOptimization
            });
            var o = i(500222)
        }
        ,
        873337: (e, t, i) => {
            i.d(t, {
                AudioPageBreadcrumbs: () => o.AudioPageBreadcrumbs,
                AudioSnippetsBlockNetworkError: () => a.AudioSnippetsBlockNetworkError,
                AudioSnippetsBlockSkeleton: () => s.AudioSnippetsBlockSkeleton,
                AudioSnippetsBlocksLayout: () => n.AudioSnippetsBlocksLayout,
                ContainOptimization: () => r.ContainOptimization
            });
            i(74375),
            i(475556);
            var o = i(356139)
              , a = i(27583)
              , s = i(271560)
              , n = i(484462)
              , r = i(797879)
        }
        ,
        456825: (e, t, i) => {
            i.d(t, {
                SNIPPET_BLOCK_HEIGHT: () => a,
                SNIPPET_BLOCK_WIDTH: () => o
            });
            const o = 550
              , a = 458
        }
        ,
        54486: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsBlockContainer: () => _
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(175400)
              , n = i(529668)
              , r = i(373080)
              , c = i(313645)
              , l = i(8520)
              , d = i(866467)
              , u = i(74375)
              , h = i(475556)
              , p = i(385645);
            function _() {
                const [e,t] = (0,
                a.useState)(null)
                  , i = (0,
                p.useStoreItems)()
                  , _ = (0,
                d.getLang)("audio_mobile_apps_block_popup_title")
                  , v = (0,
                d.getLang)("audio_mobile_apps_block_popup_text");
                return (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(u.AudioMobileAppsBlock, {
                        title: (0,
                        o.jsx)(c.Icon28LogoVkMusicColorWithText, {}),
                        description: (0,
                        d.getLang)("audio_mobile_apps_block_description"),
                        children: (0,
                        o.jsx)(s.ButtonGroup, {
                            mode: "vertical",
                            gap: "m",
                            stretched: !0,
                            children: i.map(( (e, i) => (0,
                            o.jsx)(n.StoreButton, {
                                href: e.href,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                size: "m",
                                stretched: !0,
                                "aria-label": e.label,
                                showQR: !0,
                                onQRClick: () => t(e),
                                children: e.icon
                            }, i)))
                        })
                    }), e && (0,
                    o.jsx)(h.AudioMobileAppsPopup, {
                        onClose: () => t(null),
                        qrSvg: (0,
                        o.jsx)(r.InnerHTML, {
                            children: e.qrSvg
                        }),
                        text: v,
                        title: (0,
                        l.decodeHTMLEntities)(_)
                    })]
                })
            }
        }
        ,
        385645: (e, t, i) => {
            i.d(t, {
                useStoreItems: () => o.useStoreItems
            });
            var o = i(462011)
        }
        ,
        462011: (e, t, i) => {
            i.d(t, {
                useStoreItems: () => b
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(606113)
              , n = i(611754)
              , r = i(126645)
              , c = i.n(r)
              , l = i(446565)
              , d = i(564739)
              , u = i(590664)
              , h = i(451982)
              , p = i(135608)
              , _ = i(827902)
              , v = i(866467)
              , m = i(153752);
            const b = () => {
                const {locale: e} = (0,
                n.useLocale)();
                return (0,
                a.useMemo)(( () => [{
                    icon: "ru" === e ? (0,
                    o.jsx)(l.Icon40AppStoreButtonRu, {}) : (0,
                    o.jsx)(d.Icon40AppStoreButtonEn, {}),
                    qrSvg: y("https://apps.apple.com/ru/app/id1054372220"),
                    href: "https://apps.apple.com/ru/app/id1054372220",
                    label: (0,
                    v.getLang)("audio_mobile_apps_block_ios_label")
                }, {
                    icon: "ru" === e ? (0,
                    o.jsx)(u.Icon40GooglePlayButtonRu, {}) : (0,
                    o.jsx)(h.Icon40GooglePlayButtonEn, {}),
                    qrSvg: y("https://play.google.com/store/apps/details?id=com.uma.musicvk"),
                    href: "https://play.google.com/store/apps/details?id=com.uma.musicvk",
                    label: (0,
                    v.getLang)("audio_mobile_apps_block_android_label")
                }, {
                    icon: "ru" === e ? (0,
                    o.jsx)(p.Icon40RustoreButtonRu, {}) : (0,
                    o.jsx)(_.Icon40RustoreButtonEn, {}),
                    qrSvg: y("https://apps.rustore.ru/app/com.uma.musicvk"),
                    href: "https://apps.rustore.ru/app/com.uma.musicvk",
                    label: (0,
                    v.getLang)("audio_mobile_apps_block_rustore_label")
                }]), [e])
            }
              , g = (0,
            s.svgStringToDataUrl)((0,
            m.getIcon28LogoVkMusicColor)().icon);
            function y(e) {
                return c().createQR(e, 165, "", {
                    isShowLogo: !0,
                    logoData: g
                })
            }
        }
        ,
        617534: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsBlockContainer: () => o.AudioMobileAppsBlockContainer
            });
            var o = i(54486)
        }
        ,
        895289: (e, t, i) => {
            i.d(t, {
                AudioMobileAppsBlockContainer: () => o.AudioMobileAppsBlockContainer
            });
            var o = i(617534)
        }
        ,
        94526: (e, t, i) => {
            i.d(t, {
                AudioPageSnippetsApplicationEffector: () => d
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(865708)
              , n = i(319756)
              , r = i(211413)
              , c = i(460167)
              , l = i(304249);
            function d() {
                return (0,
                a.useEffect)(( () => {
                    (0,
                    n.ensureDIRootWebContainer)().resolve(c.AudioSectionEffects).activate()
                }
                ), []),
                (0,
                o.jsxs)(s.AppRootProvider, {
                    children: [(0,
                    o.jsx)(r.PageBlockOffsetSpacing, {}), (0,
                    o.jsx)(l.AudioPageSnippetsContainer, {})]
                })
            }
        }
        ,
        133329: (e, t, i) => {
            i.d(t, {
                AudioPageSnippetsContainer: () => v
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(441600)
              , n = i(172656)
              , r = i(303800)
              , c = i(694132)
              , l = i(866467)
              , d = i(211413)
              , u = i(873337)
              , h = i(895289)
              , p = i(298430)
              , _ = i(374114);
            function v() {
                const e = (0,
                d.useNarrowColumnOffset)()
                  , t = (0,
                a.useMemo)(m, []);
                return (0,
                a.useEffect)(( () => {
                    (new c.AudioNavScreenProvider).setPage(c.AudioNavScreenPageType.SnippetsFeed)
                }
                ), []),
                (0,
                _.useAudioPageSnippetsStat)(),
                (0,
                o.jsxs)(s.TwoColumnLayout, {
                    children: [(0,
                    o.jsxs)(s.TwoColumnLayout.Main, {
                        role: "main",
                        children: [(0,
                        o.jsx)(n.Group, {
                            separator: "hide",
                            style: {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0
                            },
                            children: (0,
                            o.jsx)(r.Div, {
                                children: (0,
                                o.jsx)(u.AudioPageBreadcrumbs, {
                                    items: t
                                })
                            })
                        }), (0,
                        o.jsx)(p.AudioSnippetsBlocksContainer, {})]
                    }), (0,
                    o.jsx)(s.TwoColumnLayout.Narrow, {
                        offsetTop: e,
                        children: (0,
                        o.jsx)(h.AudioMobileAppsBlockContainer, {})
                    })]
                })
            }
            function m() {
                return [{
                    id: "main",
                    label: (0,
                    l.getLang)("audio_page_crumb_main"),
                    href: "/audio"
                }, {
                    id: "snippets",
                    label: (0,
                    l.getLang)("audio_page_crumb_snippets")
                }]
            }
        }
        ,
        374114: (e, t, i) => {
            i.d(t, {
                useAudioPageSnippetsStat: () => o.useAudioPageSnippetsStat
            });
            var o = i(862404)
        }
        ,
        862404: (e, t, i) => {
            i.d(t, {
                useAudioPageSnippetsStat: () => c
            });
            var o = i(442137)
              , a = i(296540)
              , s = i(622969);
            const {snippetsStatCollectorService: n, snippetsPlayerService: r} = s.audioPageSnippetsService;
            function c() {
                const e = (0,
                o.useUnit)(r.$isPlaying);
                (0,
                a.useEffect)(( () => {
                    n.logOpenPageFx();
                    const t = () => {
                        n.logClosePageFx(),
                        e && n.logStopAndClosePageFx()
                    }
                    ;
                    return window.addEventListener("beforeunload", t),
                    () => window.removeEventListener("beforeunload", t)
                }
                ), [])
            }
        }
        ,
        304249: (e, t, i) => {
            i.d(t, {
                AudioPageSnippetsContainer: () => o.AudioPageSnippetsContainer
            });
            var o = i(133329)
        }
        ,
        846580: (e, t, i) => {
            i.d(t, {
                AudioSnippetCarouselItemContainer: () => m
            });
            var o = i(474848)
              , a = i(293721)
              , s = i(817037)
              , n = i(181023)
              , r = i(662427)
              , c = i(478455)
              , l = i(549089)
              , d = i(898848)
              , u = i(866467)
              , h = i(509734)
              , p = i(622969)
              , _ = i(254615);
            const {snippetsStatCollectorService: v} = p.audioPageSnippetsService;
            function m({audio: e, playing: t, current: i, onPlay: m, onPause: b}) {
                const [g,y] = (0,
                a.useUnit)([p.audioPageSnippetsService.$myMusicIdentitiesMap, p.audioPageSnippetsService.$myMusicIdentitiesPendingMap])
                  , f = (0,
                c.getAudioFullId)({
                    id: e.id,
                    ownerId: e.ownerId
                })
                  , S = (0,
                _.useArtists)(e.author.main)
                  , P = (0,
                _.useArtists)(e.author.feat)
                  , w = f in g
                  , A = f in y;
                return (0,
                o.jsx)(s.AudioSnippetCarouselItem, {
                    title: (0,
                    o.jsx)(n.AudioSnippetAudioName, {
                        name: e.title,
                        href: e?.releaseAudioId ? `audio${e.releaseAudioId}` : void 0,
                        onClick: e?.releaseAudioId ? () => {
                            v.logOpenAudioLinkFx()
                        }
                        : void 0
                    }),
                    artist: (0,
                    o.jsx)(r.AudioSnippetArtists, {
                        raw: e.author.raw,
                        main: S,
                        feat: P
                    }),
                    current: i,
                    coverSrc: (0,
                    l.pickAudioArtworkImage)(e.artwork, (0,
                    d.isRetina)() ? 440 : 220)?.src,
                    state: t ? "play" : "pause",
                    onChangeStateButtonClick: () => {
                        if (t)
                            return b();
                        m()
                    }
                    ,
                    myMusicButton: (0,
                    o.jsx)(h.AudioMyMusicIconButton, {
                        type: w ? "delete" : "add",
                        disabled: A,
                        onClick: w ? () => {
                            p.audioPageSnippetsService.deleteFromMyMusicFx(e)
                        }
                        : () => {
                            p.audioPageSnippetsService.addToMyMusicFx(e)
                        }
                    }),
                    ariaLabelPlay: (0,
                    u.getLang)("global_audio_play"),
                    ariaLabelPause: (0,
                    u.getLang)("global_audio_pause")
                }, (0,
                c.getAudioFullId)(e))
            }
        }
        ,
        254615: (e, t, i) => {
            i.d(t, {
                useArtists: () => o.useArtists
            });
            var o = i(728822)
        }
        ,
        728822: (e, t, i) => {
            i.d(t, {
                useArtists: () => n
            });
            var o = i(296540)
              , a = i(622969);
            const {snippetsStatCollectorService: s} = a.audioPageSnippetsService;
            function n(e) {
                return (0,
                o.useMemo)(( () => e.map((e => function(e, t) {
                    return {
                        name: e.name,
                        href: `/artist/${e.id}`,
                        onClick: t
                    }
                }(e, ( () => {
                    s.logOpenArtistLinkFx()
                }
                ))))), [e])
            }
        }
        ,
        399244: (e, t, i) => {
            i.d(t, {
                AudioSnippetCarouselItemContainer: () => o.AudioSnippetCarouselItemContainer
            });
            var o = i(846580)
        }
        ,
        335799: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockContainer: () => w
            });
            var o = i(474848)
              , a = i(293721)
              , s = i(313339)
              , n = i(731039)
              , r = i(517635)
              , c = i(96923)
              , l = i(377503)
              , d = i(478455)
              , u = i(866467)
              , h = i(426389)
              , p = i(833141)
              , _ = i(766194)
              , v = i(978367)
              , m = i(622969)
              , b = i(873337)
              , g = i(399244)
              , y = i(757870);
            const {playerService: f, snippetsPlayerService: S, snippetsStatCollectorService: P} = m.audioPageSnippetsService;
            function w({active: e, list: t, noTopRounded: i, index: m, audioIndex: w}) {
                const {snippets: k} = t
                  , E = (0,
                a.useUnit)(S.$currentState)
                  , I = (0,
                a.useUnit)(S.$playingState)
                  , q = (0,
                a.useUnit)(S.$progress)
                  , x = (0,
                a.useUnit)(S.$isPlaying)
                  , T = (0,
                a.useUnit)(f.$isAd)
                  , L = (0,
                a.useUnit)(f.$isPlaying)
                  , {images: C, ready: O, blurred: j} = (0,
                y.useSnippetsImages)(k)
                  , M = (0,
                y.usePlaylistLink)(t.navUrl)
                  , N = I?.list?.audios === k
                  , R = I?.list?.audioIndex ?? -1
                  , D = e ? E?.list?.audioIndex ?? 0 : w ?? 0
                  , F = C[D]
                  , B = (e, t) => {
                    const i = k[e];
                    i && S.moveQueueFx({
                        reason: t,
                        list: k,
                        audio: i
                    })
                }
                  , U = () => {
                    if (T)
                        return f.pauseFx(),
                        void B(D, h.AudioPlayerPlayAudioEventReason.PlayButton);
                    S.pauseFx({
                        reason: h.AudioPlayerPauseAudioEventReason.PauseButton
                    }),
                    P.logPauseButtonClickFx()
                }
                ;
                if (!O)
                    return (0,
                    o.jsx)(b.AudioSnippetsBlockSkeleton, {
                        noTopRounded: i
                    });
                const z = t => !!e && (T ? L && D === t : N && x && R === t);
                return (0,
                o.jsx)(s.AudioSnippetsCardLayout, {
                    noTopRounded: i,
                    backgroundSrc: F,
                    noBlur: j,
                    before: (0,
                    o.jsx)(n.SlicedProgressBar, {
                        count: k.length,
                        progress: e ? A(D, N, R, q) : D
                    }),
                    after: (0,
                    o.jsx)(r.AudioSnippetsPlaylistInfo, {
                        title: t.title,
                        subtitle: t.subtitle,
                        href: M ?? void 0,
                        onLinkClick: M ? e => {
                            e.preventDefault();
                            const t = (0,
                            p.parseAudioPlaylistIdentityFromHref)(e.currentTarget.href);
                            t && (0,
                            _.setAudioLastListRefCookie)({
                                ref: v.AudioPlayerTrackRef.SnippetFeed,
                                list: t,
                                index: m
                            }),
                            window.nav.go(e.currentTarget.href),
                            P.logOpenPlaylistLinkFx()
                        }
                        : void 0,
                        onLinkEnter: e => {
                            const t = (0,
                            p.parseAudioPlaylistIdentityFromHref)(e.currentTarget?.href);
                            t && (0,
                            _.setAudioLastListRefCookieDebounced)({
                                ref: v.AudioPlayerTrackRef.SnippetFeed,
                                list: t,
                                index: m
                            })
                        }
                        ,
                        cover: (0,
                        o.jsx)(c.AudioSnippetsPlaylistInfoImage, {
                            src: t.cover,
                            mode: t.byArtist ? "avatar" : "cover",
                            size: 40
                        }),
                        linkAriaLabel: t.title,
                        exclusive: t.isExclusive
                    }),
                    children: (0,
                    o.jsx)(l.AudioCarousel, {
                        index: D,
                        onPrevClick: () => {
                            B(Math.max(D - 1, 0), h.AudioPlayerPlayAudioEventReason.PrevButton),
                            P.logPrevSnippetFx(),
                            P.logPrevButtonClickFx(),
                            x && P.logStopAndPlayPrevFx()
                        }
                        ,
                        onNextClick: () => {
                            B(Math.min(D + 1, k.length - 1), h.AudioPlayerPlayAudioEventReason.NextButton),
                            P.logNextSnippetFx(),
                            P.logNextButtonClickFx(),
                            x && P.logStopAndPlayNextFx()
                        }
                        ,
                        prevAriaLabel: (0,
                        u.getLang)("global_audio_prev"),
                        nextAriaLabel: (0,
                        u.getLang)("global_audio_next"),
                        children: k.map(( (e, t) => (0,
                        o.jsx)(g.AudioSnippetCarouselItemContainer, {
                            audio: e,
                            current: D === t,
                            playing: z(t),
                            onPause: U,
                            onPlay: () => (e => {
                                if (T)
                                    return f.resumeFx(),
                                    void B(k.indexOf(e) ?? D, h.AudioPlayerPlayAudioEventReason.AudioButton);
                                S.playFx({
                                    audio: e,
                                    list: k,
                                    reason: h.AudioPlayerPlayAudioEventReason.PlayButton
                                }),
                                P.logPlayButtonClickFx()
                            }
                            )(e)
                        }, (0,
                        d.getAudioFullId)(e))))
                    })
                })
            }
            function A(e, t, i, o) {
                let a = o;
                return t && i === e || (a = 0),
                e + a
            }
        }
        ,
        757870: (e, t, i) => {
            i.d(t, {
                usePlaylistLink: () => o.usePlaylistLink,
                useSnippetsImages: () => a.useSnippetsImages
            });
            var o = i(153319)
              , a = i(45669)
        }
        ,
        153319: (e, t, i) => {
            i.d(t, {
                usePlaylistLink: () => a
            });
            var o = i(296540);
            function a(e) {
                return (0,
                o.useMemo)(( () => {
                    if (!e)
                        return null;
                    try {
                        const t = new URL(e);
                        return `${t.pathname}${t.search}`
                    } catch (t) {
                        return console.error("[AudioSnippetsBlockContainer] Invalid playlist navUrl", e),
                        null
                    }
                }
                ), [e])
            }
        }
        ,
        45669: (e, t, i) => {
            i.d(t, {
                useSnippetsImages: () => d
            });
            var o = i(296540)
              , a = i(549089)
              , s = i(50790)
              , n = i(515438)
              , r = i(273259)
              , c = i(575753)
              , l = i(456825);
            function d(e) {
                const t = c.browser.safari || c.browser.safari_mobile
                  , [i,a] = (0,
                o.useState)({})
                  , [d,h] = (0,
                o.useState)(!t)
                  , p = (0,
                s.useIsMounted)()
                  , _ = (0,
                n.useValueRef)(e)
                  , v = (0,
                n.useValueRef)(i)
                  , m = (0,
                o.useMemo)(( () => e.map((e => {
                    const o = u(e);
                    return o && t ? i[o] ?? void 0 : o
                }
                ))), [e, i]);
                return (0,
                o.useLayoutEffect)(( () => {
                    if (d || !t)
                        return;
                    const [o,...s] = e.map((e => async () => {
                        const t = u(e);
                        if (!t || i[t])
                            return {};
                        let o;
                        try {
                            o = await (0,
                            r.renderImage)({
                                src: t,
                                width: l.SNIPPET_BLOCK_WIDTH,
                                height: l.SNIPPET_BLOCK_HEIGHT,
                                objectFit: "cover",
                                blur: 60
                            })
                        } catch (e) {
                            o = null
                        }
                        return {
                            [t]: o
                        }
                    }
                    ))
                      , n = () => !p() || _.current !== e;
                    o?.().then((e => {
                        n() || a({
                            ...v.current,
                            ...e
                        })
                    }
                    )).finally(( () => {
                        n() || (h(!0),
                        Promise.all(s.map((e => e()))).then((e => {
                            if (n())
                                return;
                            const t = e.reduce(( (e, t) => (Object.assign(e, t),
                            e)), {
                                ...v.current
                            });
                            a(t)
                        }
                        )))
                    }
                    ))
                }
                ), [e]),
                {
                    images: m,
                    ready: d,
                    blurred: d && t
                }
            }
            function u(e) {
                return (0,
                a.pickAudioArtworkImage)(e.artwork, Math.max(l.SNIPPET_BLOCK_WIDTH, l.SNIPPET_BLOCK_HEIGHT))?.src
            }
        }
        ,
        415485: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlockContainer: () => o.AudioSnippetsBlockContainer
            });
            var o = i(335799)
        }
        ,
        473191: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlocksContainer: () => u
            });
            var o = i(474848)
              , a = i(296540)
              , s = i(293721)
              , n = i(622969)
              , r = i(873337)
              , c = i(415485)
              , l = i(456825)
              , d = i(582381);
            function u() {
                const e = (0,
                s.useUnit)(n.audioPageSnippetsService.$activeList)
                  , t = (0,
                s.useUnit)(n.audioPageSnippetsService.$activeListIndex)
                  , i = (0,
                s.useUnit)(n.audioPageSnippetsService.snippetsPlayerService.$currentState)
                  , u = (0,
                a.useRef)(null)
                  , {lists: h, skeletons: p, hasError: _, fetchNext: v} = (0,
                d.useAudioSnippetsLists)();
                return (0,
                d.useAutoplay)(),
                (0,
                d.useAudioSnippetsScrollPlayerSync)({
                    containerRef: u,
                    skeletonsCount: p.length,
                    lists: h,
                    activeListIndex: t
                }),
                (0,
                o.jsx)(r.AudioSnippetsBlocksLayout, {
                    ref: u,
                    exception: _ ? (0,
                    o.jsx)(r.AudioSnippetsBlockNetworkError, {
                        noTopRounded: 0 === h.length,
                        onActionClick: v
                    }) : null,
                    skeletons: p.map(( (e, t) => (0,
                    o.jsx)(r.ContainOptimization, {
                        height: l.SNIPPET_BLOCK_HEIGHT,
                        children: (0,
                        o.jsx)(r.AudioSnippetsBlockSkeleton, {
                            noTopRounded: !h.length && !t
                        })
                    }, h.length + t))),
                    children: h.map(( (t, a) => (0,
                    o.jsx)(r.ContainOptimization, {
                        height: l.SNIPPET_BLOCK_HEIGHT,
                        children: (0,
                        o.jsx)(c.AudioSnippetsBlockContainer, {
                            active: t === e,
                            list: t,
                            index: a,
                            noTopRounded: !a,
                            audioIndex: i.lists[a]?.audioIndex
                        })
                    }, a)))
                })
            }
        }
        ,
        775629: (e, t, i) => {
            i.d(t, {
                calcMaxSnippetsInView: () => a
            });
            var o = i(456825);
            function a() {
                return window ? Math.ceil(window.innerHeight / o.SNIPPET_BLOCK_HEIGHT) + 1 : 3
            }
        }
        ,
        424872: (e, t, i) => {
            i.d(t, {
                calcSnippetsBatchSize: () => a
            });
            var o = i(775629);
            function a() {
                return (0,
                o.calcMaxSnippetsInView)() + 1
            }
        }
        ,
        582381: (e, t, i) => {
            i.d(t, {
                useAudioSnippetsLists: () => o.useAudioSnippetsLists,
                useAudioSnippetsScrollPlayerSync: () => a.useAudioSnippetsScrollPlayerSync,
                useAutoplay: () => s.useAutoplay
            });
            var o = i(306687)
              , a = i(226967)
              , s = i(282899)
        }
        ,
        306687: (e, t, i) => {
            i.d(t, {
                useAudioSnippetsLists: () => c
            });
            var o = i(296540)
              , a = i(622969)
              , s = i(293721)
              , n = i(424872)
              , r = i(775629);
            function c() {
                const e = (0,
                s.useUnit)(a.audioPageSnippetsService.$lists)
                  , t = (0,
                s.useUnit)(a.audioPageSnippetsService.$screenListIndex)
                  , i = (0,
                s.useUnit)(a.audioPageSnippetsService.$fetchingCount)
                  , c = !!(0,
                s.useUnit)(a.audioPageSnippetsService.$fetchingError)
                  , l = () => {
                    a.audioPageSnippetsService.fetchNextListsFx({
                        count: (0,
                        n.calcSnippetsBatchSize)()
                    })
                }
                ;
                (0,
                o.useEffect)(( () => {
                    const o = !!i
                      , a = (0,
                    r.calcMaxSnippetsInView)();
                    !(!!e.length && e.length - t <= a) && e.length || o || c || l()
                }
                ), [t]);
                const d = Math.max(i, c ? 0 : (0,
                n.calcSnippetsBatchSize)())
                  , u = (0,
                o.useMemo)(( () => new Array(d).fill(null)), [d]);
                return {
                    lists: e,
                    skeletons: u,
                    hasError: c,
                    fetchNext: l
                }
            }
        }
        ,
        226967: (e, t, i) => {
            i.d(t, {
                useAudioSnippetsScrollPlayerSync: () => r
            });
            var o = i(296540)
              , a = i(8520)
              , s = i(549831)
              , n = i(622969);
            function r(e) {
                const {containerRef: t, activeListIndex: i, skeletonsCount: r, lists: c} = e
                  , l = (0,
                o.useRef)(0)
                  , d = function(e) {
                    const {containerRef: t, lists: i, skeletonsCount: a} = e
                      , s = (0,
                    o.useRef)([]);
                    return (0,
                    o.useEffect)(( () => {
                        const e = t.current;
                        if (!e)
                            return;
                        const i = [...e.children].map(( (e, t) => {
                            if (0 === t)
                                return 0;
                            const i = e.getBoundingClientRect()
                              , o = getComputedStyle(e);
                            let a = parseInt(o.scrollMarginTop);
                            return Number.isNaN(a) && (a = 0),
                            i.top + window.scrollY - a
                        }
                        ));
                        s.current = i
                    }
                    ), [i.length, a]),
                    s
                }(e);
                !function({blocksPositionsRef: e, skeletonsCount: t, enabled: i}) {
                    const n = (0,
                    s.useValueRef)(t);
                    (0,
                    o.useEffect)(( () => {
                        if (!i)
                            return;
                        const t = () => {
                            const t = e.current
                              , i = t.length - 1;
                            return t[i - n.current] ?? t[i] ?? 0
                        }
                          , o = (e, i) => {
                            const o = window.scrollY + i;
                            (o < 0 || i > 0 && o > t()) && e.preventDefault()
                        }
                          , s = e => {
                            o(e, e.deltaY)
                        }
                        ;
                        let r = 0;
                        const c = e => {
                            e.touches.length > 1 || (r = e.touches[0].pageY)
                        }
                          , l = e => {
                            if (e.touches.length > 1)
                                return;
                            const {pageY: t} = e.touches[0]
                              , i = t - r;
                            r = t,
                            o(e, i)
                        }
                          , d = (0,
                        a.debounce)(( () => {
                            const e = t();
                            window.scrollY > e && window.scrollTo({
                                top: e,
                                behavior: "smooth"
                            })
                        }
                        ), 100);
                        return window.addEventListener("wheel", s, {
                            passive: !1
                        }),
                        window.addEventListener("touchstart", l, {
                            passive: !1
                        }),
                        window.addEventListener("touchmove", l, {
                            passive: !1
                        }),
                        window.addEventListener("scroll", d),
                        () => {
                            d.cancel(),
                            window.removeEventListener("wheel", s),
                            window.removeEventListener("touchstart", c),
                            window.removeEventListener("touchmove", l),
                            window.removeEventListener("scroll", d)
                        }
                    }
                    ), [i])
                }({
                    blocksPositionsRef: d,
                    skeletonsCount: r,
                    enabled: !!c.length
                }),
                (0,
                o.useEffect)(( () => {
                    const e = (0,
                    a.debounce)(( () => {
                        const {scrollY: e} = window
                          , t = d.current
                          , i = t.findIndex((t => e <= t + 50));
                        if (-1 !== i) {
                            const o = t[i];
                            e !== o && window.scrollTo({
                                top: o,
                                behavior: "smooth"
                            })
                        }
                        l.current !== i && (l.current = i,
                        n.audioPageSnippetsService.scrolledToListIndex(i))
                    }
                    ), 100);
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }),
                    () => {
                        e.cancel(),
                        window.removeEventListener("scroll", e)
                    }
                }
                ), []),
                (0,
                o.useEffect)(( () => {
                    const e = t.current;
                    if (!e || i === l.current)
                        return;
                    const o = e.childNodes[i];
                    if (!(o && o instanceof HTMLElement))
                        return;
                    const a = setTimeout(( () => {
                        o.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                    ), 0);
                    return () => {
                        clearTimeout(a)
                    }
                }
                ), [i])
            }
        }
        ,
        282899: (e, t, i) => {
            i.d(t, {
                useAutoplay: () => c
            });
            var o = i(296540)
              , a = i(293721)
              , s = i(767105)
              , n = i(426389)
              , r = i(622969);
            function c() {
                const {playerService: e, snippetsPlayerService: t, snippetsStatCollectorService: i} = r.audioPageSnippetsService
                  , c = (0,
                o.useRef)(!1)
                  , l = (0,
                a.useUnit)(r.audioPageSnippetsService.$activeList)
                  , d = (0,
                a.useUnit)(e.$isAd)
                  , u = (0,
                s.usePageVisibility)()
                  , h = !!l;
                (0,
                o.useEffect)(( () => {
                    !c.current && h && u && !d && (c.current = !0,
                    t.playFx({
                        reason: n.AudioPlayerPlayAudioEventReason.Autoplay
                    }).then(( () => {
                        i.logPlayAutoplayFx()
                    }
                    )).catch((e => {
                        0
                    }
                    )))
                }
                ), [h, u, d]),
                (0,
                o.useEffect)(( () => () => {
                    t.stopFx({
                        reason: n.AudioPlayerStopAudioEventReason.ChangeQueue
                    })
                }
                ), [])
            }
        }
        ,
        298430: (e, t, i) => {
            i.d(t, {
                AudioSnippetsBlocksContainer: () => o.AudioSnippetsBlocksContainer
            });
            var o = i(473191)
        }
        ,
        179925: (e, t, i) => {
            i.d(t, {
                AudioPageSnippetsApplicationEffector: () => o.AudioPageSnippetsApplicationEffector
            });
            var o = i(94526)
        }
        ,
        704059: (e, t, i) => {
            i.d(t, {
                createAudioPageSnippetsService: () => v
            });
            var o = i(32489)
              , a = i(810780)
              , s = i(40608)
              , n = i(345997)
              , r = i(478455)
              , c = i(866467)
              , l = i(426389)
              , d = i(803111)
              , u = i(402230)
              , h = i(100202)
              , p = i(246429)
              , _ = i(261014);
            function v() {
                const e = (0,
                o.createDomain)("audio/page/snippets")
                  , t = e.createEvent()
                  , i = (0,
                d.ensureAudioPlayerService)()
                  , v = (0,
                s.createAudioSnippetListsService)({
                    domain: e
                })
                  , m = (0,
                u.createAudioSnippetsPlayerService)({
                    domain: e
                })
                  , b = (0,
                n.ensureMyMusicService)()
                  , g = e.createEvent()
                  , y = e.createEvent()
                  , f = e.createEvent()
                  , {$lists: S, $fetchingCount: P, $error: w} = v
                  , A = (0,
                o.restore)(f, null)
                  , k = (0,
                o.combine)([S, A]).map(( ([e,t]) => Math.max(0, t ? e.indexOf(t) : 0)))
                  , E = (0,
                o.restore)(t, 0)
                  , I = (0,
                o.combine)([S, E]).map(( ([e,t]) => e[t] ?? null))
                  , {$myMusicIdentitiesPendingMap: q, myMusicIdentitiesPendingMapApi: x} = (0,
                _.createMyMusicIdentitiesPendingMap)({
                    domain: e
                })
                  , T = (0,
                h.createAudioSnippetsStatCollectorService)({
                    config: {
                        domain: e
                    },
                    snippetsPlayerService: m,
                    $activeList: A,
                    $activeListIndex: k
                })
                  , L = v.fetchNextFx
                  , C = e.createEffect((async e => {
                    const t = await b.addFx({
                        trackedIdentity: e,
                        userId: window.vk.id
                    });
                    T.logAddAudioToMyMusicFx({
                        audioAddedId: t.id,
                        audioAddedOwnerId: t.ownerId
                    }),
                    (0,
                    p.showDoneBoxFull)("", {}, {
                        title: (0,
                        c.getLang)("audio_add_full_audio_snippet_success_notification_title"),
                        text: (0,
                        c.getLang)("audio_add_full_audio_snippet_success_notification_text")
                    })
                }
                ))
                  , O = (0,
                o.attach)({
                    source: b.$identitiesMap,
                    mapParams: ({id: e, ownerId: t}, i) => ({
                        identity: i[(0,
                        r.getAudioFullId)({
                            id: e,
                            ownerId: t
                        })]
                    }),
                    effect: (0,
                    o.createEffect)((async e => {
                        await b.deleteFx(e),
                        T.logDeleteAudioFromMyMusicFx()
                    }
                    ))
                });
                (0,
                o.sample)({
                    clock: y,
                    target: (0,
                    a.spread)({
                        targets: {
                            snippetLists: v.setState,
                            queue: m.setQueueState
                        }
                    })
                }),
                (0,
                o.sample)({
                    clock: [C, O],
                    fn: ({id: e, ownerId: t}) => (0,
                    r.getAudioFullId)({
                        id: e,
                        ownerId: t
                    }),
                    target: x.add
                }),
                (0,
                o.sample)({
                    clock: [C.finally, O.finally],
                    fn: ({params: {id: e, ownerId: t}}) => (0,
                    r.getAudioFullId)({
                        id: e,
                        ownerId: t
                    }),
                    target: x.remove
                });
                const j = e.createEffect((e => {
                    m.addToQueueFx(e.map((e => e.snippets)))
                }
                ));
                return (0,
                o.sample)({
                    clock: m.$currentState,
                    source: S,
                    fn: (e, t) => {
                        const i = e.find((e => e.snippets === t?.list?.audios));
                        return i || (e[0] || null)
                    }
                    ,
                    target: f
                }),
                (0,
                o.sample)({
                    clock: L.done,
                    fn: ({result: e}) => e,
                    target: j
                }),
                (0,
                o.sample)({
                    clock: (0,
                    o.combine)({
                        lists: S,
                        currentPlayerState: m.$currentState
                    }).map(( ({lists: e, currentPlayerState: t}) => {
                        const i = t.list;
                        if (!i)
                            return !1;
                        return !(e.findIndex((e => e.snippets === i.audios)) < e.length - 1) && i.audioIndex >= i.audios.length - 1
                    }
                    )),
                    filter: e => e,
                    fn: () => ({
                        count: 3
                    }),
                    target: L
                }),
                (0,
                o.sample)({
                    clock: I,
                    source: m.$currentState,
                    fn: (e, t) => ({
                        screen: t?.snippets ?? null,
                        current: e?.list?.audios ?? null
                    }),
                    target: e.createEffect((async ({screen: e, current: t}) => {
                        e && e !== t && await m.moveQueueFx({
                            list: e,
                            reason: l.AudioPlayerPlayAudioEventReason.ListButton
                        })
                    }
                    ))
                }),
                (0,
                o.sample)({
                    clock: t,
                    source: k,
                    filter: (e, t) => e !== t,
                    fn: (e, t) => ({
                        activeListIndex: e,
                        index: t
                    }),
                    target: e.createEffect((async ({activeListIndex: e, index: t}) => {
                        T[t > e ? "logNextPlaylistFx" : "logPrevPlaylistFx"]()
                    }
                    ))
                }),
                (0,
                o.sample)({
                    clock: g,
                    target: m.reset
                }),
                (0,
                o.sample)({
                    clock: g,
                    target: v.reset
                }),
                {
                    reset: g,
                    getState: function() {
                        return {
                            snippetLists: v.getState(),
                            queue: m.getQueueState()
                        }
                    },
                    setState: y,
                    $lists: S,
                    $activeList: A,
                    $activeListIndex: k,
                    $screenListIndex: E,
                    $fetchingCount: P,
                    $fetchingError: w,
                    $myMusicIdentitiesMap: b.$identitiesMap,
                    $myMusicIdentitiesPendingMap: q,
                    fetchNextListsFx: L,
                    addToMyMusicFx: C,
                    deleteFromMyMusicFx: O,
                    scrolledToListIndex: t,
                    playerService: i,
                    snippetsPlayerService: m,
                    snippetsStatCollectorService: T
                }
            }
        }
        ,
        622969: (e, t, i) => {
            i.d(t, {
                audioPageSnippetsService: () => o
            });
            const o = (0,
            i(704059).createAudioPageSnippetsService)()
        }
        ,
        261014: (e, t, i) => {
            i.d(t, {
                createMyMusicIdentitiesPendingMap: () => n
            });
            var o = i(32489)
              , a = i(412909)
              , s = i(484575);
            const n = ({domain: e}) => {
                const t = e.createStore({});
                return {
                    $myMusicIdentitiesPendingMap: t,
                    myMusicIdentitiesPendingMapApi: (0,
                    o.createApi)(t, {
                        add: (e, t) => (0,
                        a.addPairToMap)(e, {
                            key: t,
                            value: !0
                        }),
                        remove: (e, t) => (0,
                        s.removePairFromMap)(e, t)
                    })
                }
            }
        }
        ,
        412909: (e, t, i) => {
            function o(e, t) {
                return t.key in e ? e : {
                    ...e,
                    [t.key]: t.value
                }
            }
            i.d(t, {
                addPairToMap: () => o
            })
        }
        ,
        484575: (e, t, i) => {
            function o(e, t) {
                if (!(t in e))
                    return e;
                const {[t]: i, ...o} = e;
                return o
            }
            i.d(t, {
                removePairFromMap: () => o
            })
        }
        ,
        397059: (e, t, i) => {
            var o, a = i(636576), s = i(968773), n = i(993110), r = i(351129), c = i(150548), l = i(198930);
            window.vk?.stDomain && (i.p = window.vk.stDomain + "/dist/"),
            window.AudioPage || (window.AudioPage = n.AudioPage,
            window.currentAudioPage = n.currentAudioPage),
            window.AudioPage.initedFromAudioTs = !0,
            window.PlayList || (window.PlayList = s.default),
            window.BlockController = r.BlockController,
            (0,
            l.audioPageSnippetsTqRender)(),
            c.AudioRecomsOnboarding.ensure().init(),
            (o = window.requestIdleCallback) || (o = e => setTimeout(( () => e()), 1)),
            o(( () => {
                try {
                    (0,
                    a.statlogsValueEvent)("entries_requests", 1, "audio", "web")
                } catch {}
            }
            ), {
                timeout: 5e3
            });
            try {
                stManager?.done(partConfigEnabled("web_static_manager_done_with_hash") ? "dist/web/audio.ae6f2e26.js" : "dist/web/audio.js")
            } catch (e) {}
        }
        ,
        236132: (e, t, i) => {
            i.d(t, {
                getElementCrossOrigin: () => o
            });
            const o = e => "string" != typeof e || e.startsWith("data:") || e.startsWith("blob:") || function(e) {
                const t = location.origin
                  , i = new URL(e,t).origin;
                return i === t
            }(e) ? null : "Anonymous"
        }
        ,
        677587: (e, t, i) => {
            i.d(t, {
                loadImage: () => a
            });
            var o = i(236132);
            const a = (e, t) => new Promise(( (i, a) => {
                const s = new Image;
                s.crossOrigin = (0,
                o.getElementCrossOrigin)(e),
                t && (s.dataset.name = t),
                s.onerror = () => {
                    const t = e?.startsWith("data:") ? "<dataURL>" : e;
                    a(new Error(`Failed to load image's URL: ${t}`))
                }
                ,
                s.onload = () => {
                    i(s)
                }
                ,
                s.src = e
            }
            ))
        }
        ,
        611754: (e, t, i) => {
            i.d(t, {
                useLocale: () => o
            });
            const o = () => ({
                locale: window.langConfig?.locale || "ru"
            })
        }
        ,
        52016: (e, t, i) => {
            i.d(t, {
                CatalogApi: () => n
            });
            var o = i(331635)
              , a = i(641569)
              , s = i(132028);
            class n extends a.ApiNamespace {
                get namespace() {
                    return "catalog"
                }
                constructor(...e) {
                    super(...e),
                    this.getAudio = this.makeMethod("getAudio"),
                    this.getGroups = this.makeMethod("getGroups", !0),
                    this.getSearchGroups = this.makeMethod("getSearchGroups"),
                    this.getVideo = this.makeMethod("getVideo"),
                    this.getSection = this.makeMethod("getSection"),
                    this.getGroupsCollection = this.makeMethod("getGroupsCollection"),
                    this.getBlockItems = this.makeMethod("getBlockItems"),
                    this.getClassifieds = this.makeMethod("getClassifieds"),
                    this.getAudioClips = this.makeMethod("getAudioClips"),
                    this.getAudioClipsSearch = this.makeMethod("getAudioClipsSearch"),
                    this.replaceBlocks = this.makeMethod("replaceBlocks"),
                    this.getShortVideoSearch = this.makeMethod("getShortVideoSearch"),
                    this.getVideoShowcase = this.makeMethod("getVideoShowcase"),
                    this.getVideoSearchSubscriptions = this.makeMethod("getVideoSearchSubscriptions"),
                    this.getVideoSearchWeb2 = this.makeMethod("getVideoSearchWeb2"),
                    this.getVideoSearch = this.makeMethod("getVideoSearch"),
                    this.getSearchGames = this.makeMethod("getSearchGames"),
                    this.getSearchMarket = this.makeMethod("getSearchMarket"),
                    this.getPeopleSearch = this.makeMethod("getPeopleSearch"),
                    this.getOwnerVideosSearch = this.makeMethod("getOwnerVideosSearch"),
                    this.getSearchMiniApps = this.makeMethod("getSearchMiniApps"),
                    this.hideBlock = this.makeMethod("hideBlock")
                }
            }
            n = (0,
            o.__decorate)([s.scope.global()], n)
        }
        ,
        50790: (e, t, i) => {
            i.d(t, {
                useIsMounted: () => a
            });
            var o = i(296540);
            const a = () => {
                const e = (0,
                o.useRef)(!1);
                return (0,
                o.useEffect)(( () => (e.current = !0,
                () => {
                    e.current = !1
                }
                )), []),
                (0,
                o.useCallback)(( () => e.current), [])
            }
        }
        ,
        515438: (e, t, i) => {
            i.d(t, {
                useValueRef: () => a
            });
            var o = i(296540);
            function a(e) {
                const t = (0,
                o.useRef)(e);
                return t.current = e,
                t
            }
        }
        ,
        812153: (e, t, i) => {
            i.d(t, {
                useLottie: () => n
            });
            var o = i(50790)
              , a = i(296540)
              , s = i(535130);
            function n(e, {play: t, show: i}={}) {
                const {animationUrl: n, animationData: r} = e
                  , c = (0,
                a.useRef)(!1)
                  , l = (0,
                a.useRef)(null)
                  , d = (0,
                a.useRef)(null)
                  , [u,h] = (0,
                a.useState)(!1)
                  , [p,_] = (0,
                a.useState)(null)
                  , [v,m] = (0,
                a.useState)(!1)
                  , [b,g] = (0,
                a.useState)(!1)
                  , y = (0,
                o.useIsMounted)();
                (0,
                a.useEffect)(( () => {
                    const e = d.current;
                    e && !v && (void 0 !== t && (t ? e.play() : e.pause()),
                    void 0 !== i && (i ? e.show() : e.hide()))
                }
                ), [v, t, i]),
                (0,
                a.useLayoutEffect)(( () => ((async () => {
                    const t = d.current;
                    t ? c.current = !1 : (m(!0),
                    g(!1));
                    const i = l.current;
                    if ((n || r) && i && !c.current) {
                        c.current = !0,
                        h(!1),
                        _(null);
                        try {
                            const t = await s.LottieManager.loadAnimation({
                                containers: [i],
                                ...e
                            });
                            t.addEventListener("enterFrame", ( () => {
                                requestAnimationFrame(( () => {
                                    g(!0)
                                }
                                ))
                            }
                            ), {
                                once: !0
                            }),
                            t.addEventListener("destroy", ( () => {
                                g(!1)
                            }
                            ), {
                                once: !0
                            }),
                            m(!1),
                            d.current = t
                        } catch (e) {
                            h(!0),
                            _(e)
                        }
                        y() && t?.destroy()
                    }
                }
                )(),
                () => {
                    d.current?.destroy()
                }
                )), [n, r]);
                return {
                    lottieError: u,
                    lottieLoading: v,
                    lottieLoaded: !v && !u,
                    lottieRendered: b,
                    lottiePlayerRef: d,
                    lottieContainerRef: l,
                    lottieErrorMessage: p
                }
            }
        }
        ,
        767105: (e, t, i) => {
            i.d(t, {
                usePageVisibility: () => s
            });
            var o = i(296540)
              , a = i(939661);
            function s() {
                const [e,t] = (0,
                o.useState)(!0);
                return (0,
                o.useLayoutEffect)(( () => {
                    const e = a.PageVisibilityObserver.ensure();
                    t(e.visibility);
                    const i = e => {
                        t(e)
                    }
                    ;
                    return e.on("change", i),
                    () => {
                        e.off("change", i)
                    }
                }
                ), []),
                e
            }
        }
        ,
        549089: (e, t, i) => {
            function o(e, t, i) {
                if (!e || !e.length)
                    return;
                let o = e[0];
                for (const a of e) {
                    if (a.size === t)
                        return a;
                    i || (a.size >= t ? (a.size < o.size || o.size < t) && (o = a) : a.size > o.size && (o = a))
                }
                return i ? void 0 : o
            }
            i.d(t, {
                pickAudioArtworkImage: () => o
            })
        }
        ,
        40608: (e, t, i) => {
            i.d(t, {
                createAudioSnippetListsService: () => s
            });
            var o = i(32489)
              , a = i(496479);
            function s({domain: e}) {
                const t = e.createEvent()
                  , i = e.createEvent()
                  , s = e.createStore([])
                  , n = e.createStore(0)
                  , r = (0,
                a.createAudioSnippetListsFetchNextFx)(e);
                s.on(r.done, ( (e, {result: t}) => t.length ? [...e, ...t] : e)),
                s.reset(t),
                n.on(r, ( (e, {count: t}) => t)),
                n.reset(r.finally);
                const c = (0,
                o.restore)(r.failData, null);
                return c.reset(r),
                (0,
                o.sample)({
                    clock: i,
                    target: s
                }),
                {
                    reset: t,
                    getState: function() {
                        return s.getState()
                    },
                    setState: i,
                    $lists: s,
                    fetchNextFx: r,
                    $fetchingCount: n,
                    $error: c
                }
            }
        }
        ,
        496479: (e, t, i) => {
            i.d(t, {
                createAudioSnippetListsFetchNextFx: () => c
            });
            var o = i(404089)
              , a = i(580352)
              , s = i(139612)
              , n = i(346127)
              , r = i(488150);
            function c(e) {
                const t = (0,
                a.createAudioGetSnippetsFx)({
                    domain: e
                })
                  , i = (0,
                o.debounceTask)((async ({count: e}) => (await t({
                    query: {
                        count: e
                    },
                    config: {
                        maxRetries: 3
                    }
                })).map(l)), {
                    runLast: !1
                });
                return e.createEffect((async e => {
                    try {
                        return i(e)
                    } catch (e) {
                        if (e instanceof o.DebounceAbortError)
                            return [];
                        throw e
                    }
                }
                ))
            }
            function l(e) {
                return {
                    title: e.title,
                    subtitle: e.text,
                    cover: e.image,
                    audios: e.audio_ids.map(s.mapAPIRawIdToAudioIdentity),
                    snippets: e.audios.map((e => (0,
                    n.mapAPIAudioToTrackedMusicAudioData)(r.AudioType.MusicSnippet, e))),
                    navUrl: e.nav_url,
                    trackCode: e.track_code,
                    byArtist: "artist" === e.type || "artist_mix" === e.type,
                    isExclusive: "exclusive_album" === e.type
                }
            }
        }
        ,
        687623: (e, t, i) => {
            i.d(t, {
                PageVisibilityObserver: () => r
            });
            var o = i(558137)
              , a = i(584053);
            const s = ["webkit", "o", "ms", "moz", ""]
              , n = (0,
            o.makeSharedState)("PageVisibilityObserver", ( () => ({
                instance: null
            })), {
                version: 1
            });
            class r {
                static ensure() {
                    const e = n();
                    return e.instance || (e.instance = new r),
                    e.instance
                }
                get visibility() {
                    return this._visibility
                }
                on(e, t) {
                    return this.emitter.on(e, t),
                    this
                }
                off(e, t) {
                    return this.emitter.off(e, t),
                    this
                }
                listen() {
                    try {
                        this.isSupported ? (document.addEventListener(this.visibilityPrefix + "visibilitychange", ( () => this.setVisibility(this.documentVisibility))),
                        window.addEventListener(this.visibilityPrefix + "visibilitychange", ( () => this.setVisibility(this.documentVisibility)))) : (window.addEventListener("focus", ( () => this.setVisibility(!0)), !0),
                        window.addEventListener("blur", ( () => this.setVisibility(!1)), !0))
                    } catch (e) {}
                }
                setVisibility(e) {
                    this._visibility !== e && (this._visibility = e,
                    this.emitter.emit("change", e))
                }
                get documentVisibility() {
                    return !document[this.hiddenStateName]
                }
                constructor() {
                    if (this.emitter = new a.Emitter,
                    this.visibilityPrefix = "",
                    this.hiddenStateName = "hidden",
                    this.isSupported = !0,
                    this._visibility = !0,
                    "hidden"in document)
                        this.hiddenStateName = "hidden",
                        this.visibilityPrefix = "",
                        this.isSupported = !0;
                    else
                        for (let e = 0; e < s.length; e++) {
                            const t = s[e];
                            t + "Hidden"in document && (this.hiddenStateName = `${t}Hidden`,
                            this.visibilityPrefix = t,
                            this.isSupported = !0)
                        }
                    this.setVisibility(this.documentVisibility),
                    this.listen()
                }
            }
        }
        ,
        404089: (e, t, i) => {
            i.d(t, {
                DebounceAbortError: () => o,
                debounceTask: () => a
            });
            class o extends Error {
            }
            function a(e, {runLast: t=!0}={}) {
                let i = !1
                  , a = null;
                const s = e => {
                    i = !0,
                    e.run().finally(( () => {
                        i = !1,
                        a && (s(a),
                        a = null)
                    }
                    ))
                }
                ;
                return (...n) => new Promise(( (r, c) => {
                    const l = {
                        run: () => e(...n).then(r, c),
                        reject: () => c(new o("Aborted by debounce"))
                    };
                    return i ? t ? (a && a.reject(),
                    void (a = l)) : l.reject() : s(l)
                }
                ))
            }
        }
        ,
        606113: (e, t, i) => {
            function o(e) {
                return `data:image/svg+xml;base64,${function(e) {
                    const t = new Uint8Array(e);
                    leti, o, s, n, r, c, l, d = "", u = 0;
                    for (; u < t.length; )
                        i = t[u++],
                        o = t[u++],
                        s = t[u++],
                        n = i >> 2,
                        r = (3 & i) << 4 | o >> 4,
                        c = (15 & o) << 2 | s >> 6,
                        l = 63 & s,
                        isNaN(o) ? c = l = 64 : isNaN(s) && (l = 64),
                        d += a.charAt(n) + a.charAt(r) + a.charAt(c) + a.charAt(l);
                    return d
                }((new TextEncoder).encode(e).buffer)}`
            }
            i.d(t, {
                svgStringToDataUrl: () => o
            });
            const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        }
        ,
        313645: (e, t, i) => {
            i.d(t, {
                Icon28LogoVkMusicColorWithText: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon28LogoVkMusicColorWithText", "logo_vk_music_color_with_text_28", "0 0 140 28", '<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 140 28" id="logo_vk_music_color_with_text_28"><g clip-path="url(#logo_vk_music_color_with_text_28_a)"><g clip-path="url(#logo_vk_music_color_with_text_28_b)"><path fill="#07F" d="M0 13.44C0 7.104 0 3.936 1.968 1.968S7.104 0 13.44 0h1.12c6.336 0 9.504 0 11.472 1.968S28 7.104 28 13.44v1.12c0 6.336 0 9.504-1.968 11.472S20.896 28 14.56 28h-1.12c-6.336 0-9.504 0-11.472-1.968S0 20.896 0 14.56z" /><path fill="#F45FFF" d="M18.48 5.6c-5.81 0-8.96 7.28-18.48 7.28v1.68c0 6.336 0 9.504 1.968 11.472S7.104 28 13.44 28h1.12c6.336 0 9.504 0 11.472-1.968S28 20.896 28 14.56v-4.33c-1.47-1.118-5.18-4.63-9.52-4.63" /><path fill="#fff" d="M21.7 14.273c0-.692.568-1.253 1.26-1.253s1.26.56 1.26 1.253v5.054c0 .692-.568 1.253-1.26 1.253s-1.26-.561-1.26-1.253zm-4.48-3.22c0-.693.568-1.253 1.26-1.253s1.26.56 1.26 1.253v11.494c0 .692-.568 1.253-1.26 1.253s-1.26-.561-1.26-1.253zm-4.48 3.22c0-.692.568-1.253 1.26-1.253s1.26.56 1.26 1.253v5.054c0 .692-.568 1.253-1.26 1.253s-1.26-.561-1.26-1.253zm-4.48 1.82c0-.692.568-1.253 1.26-1.253s1.26.561 1.26 1.253v1.414c0 .692-.568 1.253-1.26 1.253s-1.26-.56-1.26-1.253zm-4.48 0c0-.692.568-1.253 1.26-1.253s1.26.561 1.26 1.253v1.414c0 .692-.568 1.253-1.26 1.253s-1.26-.56-1.26-1.253z" /></g><g clip-path="url(#logo_vk_music_color_with_text_28_c)"><path fill="currentColor" d="M43.465 21.147H39.97L35 7h2.575l3.973 11.659h.4L46.06 7h2.536zm11.782-7.324 6.469 7.324h-3.154l-5.271-6.06h-.599v6.06h-2.396V7h2.396v5.76h.579L58.262 7h2.955zm14.503 7.324h-2.336V7h3.754L75 17.696h.32L79.232 7h3.674v14.147H80.57V10.211h-.32l-4.013 10.936h-2.236L70.07 10.211h-.32zm23.334-10.435h2.336l-4.252 11.74q-.54 1.484-1.398 2.147-.839.662-2.256.662h-1.577l-.2-2.107h1.937q.58 0 .878-.261.32-.24.54-.863l.119-.321-4.612-10.997h2.456l3.054 7.526h.32zm9.558 5.118a3 3 0 0 1 1.417.902q.579.622.579 1.546 0 .863-.539 1.565-.52.682-1.517 1.104-.978.4-2.256.4-1.697 0-2.915-.802-1.198-.802-1.577-2.127l2.116-.361q.34.703.899 1.023.558.3 1.457.301.978 0 1.497-.34.54-.342.539-.944 0-1.184-2.036-1.184h-1.298v-2.007h1.298q.918 0 1.397-.3.48-.322.48-.864 0-.582-.499-.923-.5-.34-1.238-.34-.74 0-1.338.36a2.46 2.46 0 0 0-.898.984l-2.116-.362q.459-1.444 1.637-2.187 1.197-.762 2.795-.762 1.137 0 2.036.381c.899.381 1.065.609 1.397 1.063q.52.682.52 1.546 0 .862-.52 1.485a2.46 2.46 0 0 1-1.317.842Zm4.19 5.317V10.712h2.295v2.97h1.618q1.237 0 2.196.482a3.53 3.53 0 0 1 1.497 1.324q.539.843.539 1.927a3.6 3.6 0 0 1-.539 1.946q-.539.842-1.517 1.325-.959.46-2.176.461zm11.679 0h-2.296V10.712h2.296zm-7.766-2.006q.858 0 1.397-.482t.539-1.244q0-.763-.539-1.244-.539-.482-1.397-.482h-1.618v3.451zm19.821 2.006h-3.014l-3.594-4.154h-.559v4.154h-2.296V10.712h2.296v4.054h.559l3.474-4.054h2.735l-4.372 5.017zm5.142-10.635q1.996 0 3.134 1.264Q140 13.021 140 15.288v5.86h-1.697l-.479-1.646q-.44.743-1.298 1.304-.858.542-2.036.542-1.038 0-1.877-.422a3.13 3.13 0 0 1-1.278-1.183 3.3 3.3 0 0 1-.459-1.726q0-1.485 1.158-2.368 1.178-.903 3.414-.903h2.236q-.08-1.043-.639-1.646-.539-.621-1.457-.622-.74 0-1.278.361c-.538.361-.625.536-.798.883l-2.117-.36a3.6 3.6 0 0 1 1.558-2.088q1.197-.762 2.755-.762m-.679 8.89q1.197 0 1.936-.783.74-.783.739-2.067h-2.176q-2.336 0-2.336 1.364 0 .682.499 1.084.5.402 1.338.401Z" /></g></g><defs><clipPath id="logo_vk_music_color_with_text_28_a"><path fill="#fff" d="M0 0h140v28H0z" /></clipPath><clipPath id="logo_vk_music_color_with_text_28_b"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath><clipPath id="logo_vk_music_color_with_text_28_c"><path fill="#fff" d="M35 0h124.833v25.667H35z" /></clipPath></defs></symbol>', 140, 28, !1, void 0)
        }
        ,
        564739: (e, t, i) => {
            i.d(t, {
                Icon40AppStoreButtonEn: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40AppStoreButtonEn", "app_store_button_en_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="app_store_button_en_40"><path d="M40.228 17.793h2.295l4.745 12.313h-2.313l-1.155-3.26h-4.918l-1.156 3.26H35.5zm-.76 7.415h3.762l-1.846-5.294h-.052zm8.922-4.018h1.863v1.207h.034q.414-.776 1.156-1.104a3.8 3.8 0 0 1 1.605-.345q1.052 0 1.829.38.794.361 1.311 1.017.517.639.777 1.5a6.4 6.4 0 0 1 .258 1.846q0 .896-.241 1.742a4.4 4.4 0 0 1-.708 1.5q-.465.637-1.19 1.035-.725.38-1.708.38a4.4 4.4 0 0 1-.863-.087 3.4 3.4 0 0 1-.828-.241 3.7 3.7 0 0 1-.742-.432 2.7 2.7 0 0 1-.552-.638h-.035v4.45H48.39zm6.866 4.466a4.4 4.4 0 0 0-.155-1.172 3.1 3.1 0 0 0-.466-1 2.3 2.3 0 0 0-.776-.708 2.06 2.06 0 0 0-1.07-.275q-1.242 0-1.88.862-.622.863-.622 2.294 0 .672.155 1.258.173.57.5.983.33.414.777.656.465.24 1.07.241.673 0 1.139-.276t.759-.707a2.8 2.8 0 0 0 .431-1 5 5 0 0 0 .138-1.155Zm3.854-4.466h1.863v1.207h.035q.414-.776 1.156-1.104a3.8 3.8 0 0 1 1.605-.345q1.051 0 1.829.38.794.361 1.31 1.017.519.639.777 1.5a6.4 6.4 0 0 1 .26 1.846q0 .896-.242 1.742a4.4 4.4 0 0 1-.708 1.5q-.465.637-1.19 1.035-.725.38-1.709.38a4.4 4.4 0 0 1-.862-.087 3.4 3.4 0 0 1-.828-.241 3.7 3.7 0 0 1-.742-.432 2.7 2.7 0 0 1-.553-.638h-.034v4.45H59.11zm6.867 4.466q0-.603-.155-1.172a3.1 3.1 0 0 0-.466-1 2.3 2.3 0 0 0-.776-.708 2.06 2.06 0 0 0-1.07-.275q-1.242 0-1.881.862-.621.863-.621 2.294 0 .672.155 1.258.173.57.5.983.33.414.777.656.465.24 1.07.241.672 0 1.139-.276.465-.276.759-.707a2.8 2.8 0 0 0 .431-1q.138-.57.138-1.155Zm10.468.345q0 .708.241 1.207.242.501.673.828.432.31.984.466.57.138 1.225.138.707 0 1.207-.155a2.6 2.6 0 0 0 .811-.431 1.55 1.55 0 0 0 .45-.587q.137-.345.137-.69 0-.707-.328-1.034a1.7 1.7 0 0 0-.69-.483 13 13 0 0 0-1.535-.449q-.864-.224-2.14-.569-.794-.207-1.329-.534a3.3 3.3 0 0 1-.828-.759 2.8 2.8 0 0 1-.448-.88 3.7 3.7 0 0 1-.121-.948q0-.93.38-1.604a3.5 3.5 0 0 1 1.035-1.138 4.4 4.4 0 0 1 1.449-.655 6.1 6.1 0 0 1 1.64-.224 6.2 6.2 0 0 1 1.81.258 4.3 4.3 0 0 1 1.502.742 3.6 3.6 0 0 1 1.035 1.241q.38.725.38 1.69h-2.157q-.086-1.19-.81-1.672-.726-.5-1.847-.5-.38 0-.777.086a2.2 2.2 0 0 0-.724.258 1.6 1.6 0 0 0-.552.483q-.207.31-.207.776 0 .656.396 1.035.414.361 1.07.552.07.017.535.155a79 79 0 0 1 2.209.586q.57.138.81.207.605.19 1.053.518.45.327.742.759.31.413.449.896.155.483.155.966 0 1.035-.431 1.776-.414.725-1.105 1.19a4.7 4.7 0 0 1-1.57.673 7.2 7.2 0 0 1-1.794.224 7.4 7.4 0 0 1-1.985-.259 4.65 4.65 0 0 1-1.621-.793 3.9 3.9 0 0 1-1.105-1.363q-.414-.844-.431-1.983zm8.773-4.811H86.7v-2.673h1.967v2.673h1.778v1.466h-1.778v4.76q0 .31.018.534.035.224.12.38a.7.7 0 0 0 .294.24q.19.07.517.07h.415q.207-.018.414-.07v1.518q-.329.034-.639.07-.31.033-.638.034-.777 0-1.26-.138a1.86 1.86 0 0 1-.742-.431 1.66 1.66 0 0 1-.362-.725 6 6 0 0 1-.104-.982v-5.26h-1.483V21.19Zm10.905 9.157q-1.07 0-1.916-.345a4.3 4.3 0 0 1-1.415-.983 4.3 4.3 0 0 1-.88-1.483 5.9 5.9 0 0 1-.293-1.897q0-1.017.293-1.88.31-.861.88-1.483a4.1 4.1 0 0 1 1.415-.965q.846-.363 1.916-.363t1.898.363q.845.345 1.415.965.586.622.879 1.483a5.5 5.5 0 0 1 .311 1.88q0 1.035-.311 1.897a4.06 4.06 0 0 1-2.294 2.466q-.829.345-1.898.345m0-1.552q.655 0 1.138-.276a2.4 2.4 0 0 0 .794-.724q.31-.45.449-1a4.3 4.3 0 0 0 0-2.294 2.8 2.8 0 0 0-.449-1 2.4 2.4 0 0 0-.794-.725q-.483-.275-1.138-.275-.656 0-1.14.275a2.4 2.4 0 0 0-.793.725 3.1 3.1 0 0 0-.466 1 4.8 4.8 0 0 0 0 2.294q.156.55.466 1a2.4 2.4 0 0 0 .794.724q.483.276 1.139.276m6.311-7.605h1.846v1.724h.035a2.1 2.1 0 0 1 .327-.707q.26-.344.604-.62a3 3 0 0 1 .794-.466q.432-.172.88-.172.345 0 .466.017l.276.034v1.897a5 5 0 0 0-.431-.051 2.5 2.5 0 0 0-.414-.035q-.5 0-.949.207a2.06 2.06 0 0 0-.76.586 2.8 2.8 0 0 0-.517.949q-.19.57-.19 1.31v4.243h-1.967zm12.061 3.673a3 3 0 0 0-.208-.897 2.1 2.1 0 0 0-.448-.741 1.95 1.95 0 0 0-.69-.518 1.9 1.9 0 0 0-.898-.206q-.517 0-.949.19a2.1 2.1 0 0 0-.724.5 2.6 2.6 0 0 0-.483.74 2.7 2.7 0 0 0-.19.932zm-4.59 1.294q0 .517.138 1 .155.483.448.845t.742.586q.45.207 1.07.207.862 0 1.381-.362.534-.38.793-1.121h1.864a3.7 3.7 0 0 1-.535 1.293 3.8 3.8 0 0 1-.915.966 3.9 3.9 0 0 1-1.207.57 4.6 4.6 0 0 1-1.381.206q-1.052 0-1.863-.345a3.9 3.9 0 0 1-1.381-.965 4.3 4.3 0 0 1-.845-1.484 6.2 6.2 0 0 1-.276-1.896q0-.949.293-1.794a4.7 4.7 0 0 1 .863-1.5 4.2 4.2 0 0 1 1.363-1.035q.793-.38 1.794-.38 1.053 0 1.881.449.846.431 1.398 1.155a4.6 4.6 0 0 1 .794 1.673q.258.93.138 1.932zM39.007 6.315a2.827 2.827 0 0 1 3.005 3.17c0 2.039-1.103 3.21-3.005 3.21H36.7v-6.38zm-1.315 5.478h1.204a2.008 2.008 0 0 0 2.106-2.295 2.01 2.01 0 0 0-1.238-2.137 2 2 0 0 0-.868-.145h-1.204zm5.44-1.507a2.28 2.28 0 0 1 3.196-2.304 2.28 2.28 0 0 1 1.35 2.304 2.28 2.28 0 0 1-1.349 2.308 2.284 2.284 0 0 1-3.197-2.308m3.567 0c0-1.044-.47-1.655-1.293-1.655-.827 0-1.292.61-1.292 1.655 0 1.052.466 1.658 1.292 1.658.824 0 1.293-.61 1.293-1.658m7.02 2.41h-.986l-.996-3.547h-.076l-.992 3.547h-.977L48.364 7.88h.965l.863 3.675h.07l.992-3.675h.912l.99 3.675h.076l.86-3.675h.95zm2.44-4.816h.916v.765h.071a1.44 1.44 0 0 1 1.438-.858 1.57 1.57 0 0 1 1.668 1.791v3.118h-.95v-2.88c0-.773-.337-1.158-1.04-1.158a1.107 1.107 0 0 0-1.151 1.22v2.818h-.951zM61.769 6h.95v6.696h-.95zm2.273 4.286a2.28 2.28 0 0 1 3.197-2.304 2.28 2.28 0 0 1 1.349 2.304 2.28 2.28 0 0 1-2.273 2.502 2.29 2.29 0 0 1-2.168-1.564 2.3 2.3 0 0 1-.105-.938m3.567 0c0-1.044-.47-1.655-1.293-1.655-.826 0-1.291.61-1.291 1.655 0 1.052.465 1.658 1.291 1.658.824 0 1.293-.61 1.293-1.658m1.98 1.048c0-.867.646-1.367 1.793-1.438l1.305-.075v-.416c0-.508-.337-.795-.987-.795-.53 0-.898.194-1.004.535h-.92c.096-.827.875-1.358 1.968-1.358 1.208 0 1.89.601 1.89 1.618v3.29h-.916v-.676h-.075a1.62 1.62 0 0 1-1.447.756 1.457 1.457 0 0 1-1.607-1.441m3.098-.412v-.402l-1.177.075c-.664.044-.965.27-.965.694 0 .434.377.686.894.686a1.14 1.14 0 0 0 1.248-1.053m2.197-.636c0-1.522.783-2.486 2-2.486a1.59 1.59 0 0 1 1.478.845h.071V6h.951v6.696h-.911v-.761h-.075a1.67 1.67 0 0 1-1.514.84c-1.226 0-2-.964-2-2.49Zm.982 0c0 1.021.482 1.636 1.288 1.636.801 0 1.297-.624 1.297-1.632 0-1.004-.5-1.636-1.297-1.636-.8 0-1.288.619-1.288 1.632m7.453 0a2.28 2.28 0 0 1 3.197-2.304 2.28 2.28 0 0 1 1.349 2.304 2.28 2.28 0 0 1-3.198 2.308 2.28 2.28 0 0 1-1.348-2.308m3.567 0c0-1.044-.469-1.655-1.293-1.655-.826 0-1.291.61-1.291 1.655 0 1.052.465 1.658 1.291 1.658.824 0 1.293-.61 1.293-1.658M89.14 7.88h.915v.765h.071a1.44 1.44 0 0 1 1.438-.858 1.568 1.568 0 0 1 1.669 1.791v3.118h-.952v-2.88c0-.773-.336-1.158-1.04-1.158a1.106 1.106 0 0 0-1.15 1.22v2.818h-.951zm9.467-1.199v1.221h1.044v.8h-1.044v2.477c0 .504.208.725.681.725q.181 0 .363-.022v.792q-.257.045-.518.048c-1.057 0-1.478-.372-1.478-1.3v-2.72h-.766v-.8h.766v-1.22zm2.343-.68h.943v2.653h.075a1.48 1.48 0 0 1 1.469-.863 1.586 1.586 0 0 1 1.66 1.796v3.109h-.952V9.82c0-.77-.359-1.159-1.031-1.159a1.12 1.12 0 0 0-.89.329 1.13 1.13 0 0 0-.323.892v2.813h-.951V6Zm9.693 5.394a1.96 1.96 0 0 1-2.089 1.393 2.186 2.186 0 0 1-2.226-2.485 2.224 2.224 0 0 1 2.222-2.516c1.341 0 2.15.915 2.15 2.428v.331h-3.403v.054a1.27 1.27 0 0 0 .767 1.276c.163.07.339.105.516.103a1.16 1.16 0 0 0 1.147-.584zm-3.346-1.552h2.434a1.166 1.166 0 0 0-1.186-1.248 1.23 1.23 0 0 0-1.248 1.248" /><path fill-rule="evenodd" d="M22.91 7a5.15 5.15 0 0 1-1.177 3.687 4.33 4.33 0 0 1-3.416 1.616 4.9 4.9 0 0 1 1.207-3.55A5.23 5.23 0 0 1 22.91 7m4.196 7.847a5.23 5.23 0 0 0-2.488 4.385 5.05 5.05 0 0 0 3.082 4.646 11.6 11.6 0 0 1-1.602 3.267c-.945 1.413-1.935 2.793-3.506 2.819-.747.017-1.25-.198-1.776-.422-.549-.234-1.12-.477-2.014-.477-.948 0-1.545.251-2.12.493-.498.21-.98.412-1.658.44-1.496.056-2.64-1.508-3.618-2.907-1.955-2.86-3.478-8.057-1.437-11.593a5.61 5.61 0 0 1 4.722-2.881c.848-.017 1.662.31 2.376.597.546.219 1.033.415 1.432.415.35 0 .825-.188 1.377-.408.87-.345 1.933-.767 3.017-.654a5.35 5.35 0 0 1 4.213 2.28" clip-rule="evenodd" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        446565: (e, t, i) => {
            i.d(t, {
                Icon40AppStoreButtonRu: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40AppStoreButtonRu", "app_store_button_ru_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="app_store_button_ru_40"><path d="M40.228 17.293h2.295l4.745 12.313h-2.313l-1.155-3.26h-4.918l-1.156 3.26H35.5zm-.76 7.416h3.762l-1.846-5.295h-.052L39.47 24.71Zm8.922-4.019h1.863v1.208h.034q.414-.777 1.156-1.104a3.8 3.8 0 0 1 1.605-.345q1.052 0 1.829.38.794.36 1.311 1.017.517.637.777 1.5a6.4 6.4 0 0 1 .258 1.845q0 .897-.241 1.742a4.4 4.4 0 0 1-.708 1.5q-.465.638-1.19 1.035-.725.38-1.708.38a4.4 4.4 0 0 1-.863-.087 3.4 3.4 0 0 1-.828-.241 3.7 3.7 0 0 1-.742-.431 2.7 2.7 0 0 1-.552-.638h-.035V32.9H48.39zm6.866 4.467q0-.603-.155-1.173a3.1 3.1 0 0 0-.466-1 2.3 2.3 0 0 0-.776-.707 2.06 2.06 0 0 0-1.07-.276q-1.242 0-1.88.862-.622.863-.622 2.294 0 .672.155 1.259.173.57.5.983.33.414.777.655.465.242 1.07.242.673 0 1.139-.276t.759-.707q.31-.45.431-1 .138-.57.138-1.156m3.854-4.467h1.863v1.208h.035q.414-.777 1.156-1.104a3.8 3.8 0 0 1 1.605-.345q1.051 0 1.829.38.794.36 1.31 1.017.519.637.777 1.5a6.4 6.4 0 0 1 .26 1.845q0 .897-.242 1.742a4.4 4.4 0 0 1-.708 1.5q-.465.638-1.19 1.035-.725.38-1.709.38a4.4 4.4 0 0 1-.862-.087 3.4 3.4 0 0 1-.828-.241 3.7 3.7 0 0 1-.742-.431 2.7 2.7 0 0 1-.553-.638h-.034V32.9H59.11zm6.867 4.467q0-.603-.155-1.173a3.1 3.1 0 0 0-.466-1 2.3 2.3 0 0 0-.776-.707 2.06 2.06 0 0 0-1.07-.276q-1.242 0-1.881.862-.621.863-.621 2.294 0 .672.155 1.259.173.57.5.983.33.414.777.655.465.242 1.07.242.672 0 1.139-.276.465-.276.759-.707.31-.45.431-1 .138-.57.138-1.156m10.468.345q0 .707.241 1.207.242.5.673.828.432.31.984.465.57.138 1.225.138.707 0 1.207-.155.5-.172.811-.431.311-.258.45-.586.137-.345.137-.69 0-.706-.328-1.035a1.7 1.7 0 0 0-.69-.483 13 13 0 0 0-1.535-.448 248 248 0 0 1-2.14-.57q-.794-.206-1.329-.534a3.3 3.3 0 0 1-.828-.758 2.8 2.8 0 0 1-.448-.88 3.8 3.8 0 0 1-.121-.948q0-.932.38-1.604.396-.69 1.035-1.139a4.4 4.4 0 0 1 1.449-.655 6.1 6.1 0 0 1 1.64-.224 6.2 6.2 0 0 1 1.81.259A4.3 4.3 0 0 1 82.57 18a3.6 3.6 0 0 1 1.035 1.242q.38.724.38 1.69h-2.157q-.086-1.19-.81-1.673-.726-.5-1.847-.5a3.7 3.7 0 0 0-.777.086 2.2 2.2 0 0 0-.724.259 1.6 1.6 0 0 0-.552.483q-.207.31-.207.776 0 .656.396 1.035.414.361 1.07.551.07.018.535.156a79 79 0 0 1 2.209.586q.57.137.81.207.605.19 1.053.517.45.329.742.759.31.414.449.897.155.482.155.965 0 1.035-.431 1.777-.414.725-1.105 1.19-.69.465-1.57.672a7.2 7.2 0 0 1-1.794.224 7.4 7.4 0 0 1-1.985-.258 4.65 4.65 0 0 1-1.621-.794 3.9 3.9 0 0 1-1.105-1.362q-.414-.844-.431-1.983zm8.773-4.812H86.7v-2.673h1.967v2.674h1.778v1.465h-1.778v4.76q0 .31.018.535.035.224.12.379a.7.7 0 0 0 .294.241q.19.07.517.07h.415q.207-.018.414-.07v1.518l-.639.069a6 6 0 0 1-.638.034q-.777 0-1.26-.138a1.86 1.86 0 0 1-.742-.43 1.66 1.66 0 0 1-.362-.725 6 6 0 0 1-.104-.983v-5.26h-1.483v-1.465Zm10.905 9.158q-1.07 0-1.916-.345a4.3 4.3 0 0 1-1.415-.983 4.3 4.3 0 0 1-.88-1.483 5.9 5.9 0 0 1-.293-1.897q0-1.018.293-1.88.31-.863.88-1.483a4.1 4.1 0 0 1 1.415-.966q.846-.362 1.916-.362t1.898.362q.845.345 1.415.966.586.62.879 1.483a5.5 5.5 0 0 1 .311 1.88q0 1.035-.311 1.897a4.06 4.06 0 0 1-2.294 2.466q-.829.345-1.898.345m0-1.552q.655 0 1.138-.276.484-.276.794-.725t.449-1a4.3 4.3 0 0 0 0-2.294 2.8 2.8 0 0 0-.449-1 2.4 2.4 0 0 0-.794-.724q-.483-.276-1.138-.276-.656 0-1.14.276a2.4 2.4 0 0 0-.793.724 3.1 3.1 0 0 0-.466 1 4.8 4.8 0 0 0 0 2.294q.156.552.466 1 .31.449.794.725.483.276 1.139.276m6.311-7.606h1.846v1.725h.035a2.1 2.1 0 0 1 .327-.707q.26-.345.604-.62a3 3 0 0 1 .794-.466q.432-.173.88-.173.345 0 .466.017l.276.035v1.897a5 5 0 0 0-.431-.052 2.5 2.5 0 0 0-.414-.035q-.5 0-.949.207a2.06 2.06 0 0 0-.76.587 2.8 2.8 0 0 0-.517.948q-.19.57-.19 1.31v4.243h-1.967zm12.061 3.674a3 3 0 0 0-.208-.897 2.1 2.1 0 0 0-.448-.742 1.95 1.95 0 0 0-.69-.517 1.9 1.9 0 0 0-.898-.207q-.517 0-.949.19a2.1 2.1 0 0 0-.724.5 2.6 2.6 0 0 0-.483.741 2.7 2.7 0 0 0-.19.932zm-4.59 1.293q0 .517.138 1 .155.483.448.845.294.363.742.587.45.207 1.07.207.862 0 1.381-.363.534-.38.793-1.12h1.864a3.7 3.7 0 0 1-.535 1.293q-.38.57-.915.966a3.9 3.9 0 0 1-1.207.569 4.6 4.6 0 0 1-1.381.207q-1.052 0-1.863-.345a3.9 3.9 0 0 1-1.381-.966 4.3 4.3 0 0 1-.845-1.483 6.2 6.2 0 0 1-.276-1.897q0-.948.293-1.794a4.7 4.7 0 0 1 .863-1.5 4.2 4.2 0 0 1 1.363-1.035q.793-.378 1.794-.379 1.053 0 1.881.448.846.432 1.398 1.156a4.6 4.6 0 0 1 .794 1.673q.258.93.138 1.931zM38.974 13.574q-.645 0-1.19-.152a2.7 2.7 0 0 1-.947-.467 2.2 2.2 0 0 1-.615-.79Q36 11.688 36 11.029h.917q.01.486.182.831.181.335.464.548.293.203.675.294.384.09.817.091.372 0 .696-.101.323-.112.554-.305a1.41 1.41 0 0 0 .514-1.105q0-.395-.151-.639a1 1 0 0 0-.403-.385 1.6 1.6 0 0 0-.575-.192 4.4 4.4 0 0 0-.686-.051q-.15 0-.342.01a3 3 0 0 0-.303.01v-.79q.12.02.323.02h.322q.343 0 .626-.061.292-.071.494-.223a1 1 0 0 0 .322-.396q.12-.254.121-.618 0-.335-.13-.558a.9.9 0 0 0-.344-.355 1.4 1.4 0 0 0-.494-.202 2.6 2.6 0 0 0-.574-.061q-.797 0-1.25.355-.454.345-.535 1.135h-.917q.02-.578.231-1.004a2 2 0 0 1 .585-.71 2.5 2.5 0 0 1 .847-.425Q38.481 6 39.055 6q.514 0 .958.122.453.11.786.355.333.243.524.618.192.365.192.872 0 .294-.1.547a1.6 1.6 0 0 1-.273.457 1.75 1.75 0 0 1-.817.567v.03q.353.073.625.244a1.61 1.61 0 0 1 .726.913q.09.284.09.578a2.13 2.13 0 0 1-.645 1.47q-.332.345-.866.578-.525.223-1.28.223Zm5.437-.051a2.6 2.6 0 0 1-.665-.081 1.5 1.5 0 0 1-.555-.244 1.4 1.4 0 0 1-.373-.456 1.6 1.6 0 0 1-.13-.679q0-.445.15-.73.152-.284.394-.456.252-.183.564-.274.323-.09.656-.152.353-.07.665-.101.322-.04.565-.102a1 1 0 0 0 .383-.192q.141-.132.141-.376a.83.83 0 0 0-.11-.456.7.7 0 0 0-.273-.263 1.1 1.1 0 0 0-.373-.122 3 3 0 0 0-.403-.03q-.545 0-.908.212-.363.204-.393.781h-.857a1.9 1.9 0 0 1 .202-.821 1.5 1.5 0 0 1 .484-.538q.302-.213.685-.304.393-.09.837-.091.352 0 .696.05.353.052.635.214.283.151.454.436.17.284.17.74v2.697q0 .303.031.446.04.141.242.142.09 0 .262-.051v.67q-.222.13-.615.13-.333 0-.534-.182-.192-.192-.192-.618-.352.426-.826.618a2.7 2.7 0 0 1-1.009.183m.192-.75q.423 0 .726-.112a1.7 1.7 0 0 0 .494-.294q.192-.183.282-.385.09-.213.09-.396v-.882a.94.94 0 0 1-.422.183q-.262.05-.555.091l-.575.081q-.293.041-.524.142a1 1 0 0 0-.383.294q-.141.182-.141.507a.8.8 0 0 0 .08.365.8.8 0 0 0 .222.233 1 1 0 0 0 .323.132q.18.04.383.04Zm3.903-4.603h3.569v.76h-2.712v4.481h-.857zm4.384 0h.857v.71h.02q.212-.436.665-.63.455-.202.998-.202.605 0 1.049.223.453.224.746.608.303.375.454.872.15.498.151 1.055 0 .567-.151 1.064a2.4 2.4 0 0 1-.444.862 2.06 2.06 0 0 1-.746.578 2.4 2.4 0 0 1-1.038.213 2.5 2.5 0 0 1-.898-.172 2 2 0 0 1-.443-.244 1.5 1.5 0 0 1-.343-.395h-.02v2.697h-.857v-7.24Zm2.47 4.603q.433 0 .736-.173.303-.172.484-.456a2 2 0 0 0 .262-.649q.08-.365.08-.75 0-.365-.1-.71a1.8 1.8 0 0 0-.293-.628 1.4 1.4 0 0 0-.504-.436 1.5 1.5 0 0 0-.715-.163q-.435 0-.736.173a1.46 1.46 0 0 0-.494.456 1.9 1.9 0 0 0-.283.629 3.24 3.24 0 0 0 .01 1.47q.09.354.282.628.202.274.515.447.312.162.756.162m4.111 2.727q-.151 0-.302-.02a1.4 1.4 0 0 1-.293-.071v-.791l.242.081a.9.9 0 0 0 .262.04q.262 0 .424-.121.16-.122.282-.355l.353-.882-2.067-5.211h.968l1.522 4.288h.02l1.462-4.288h.908l-2.269 5.93q-.15.386-.302.65a1.5 1.5 0 0 1-.323.426.96.96 0 0 1-.393.243 1.4 1.4 0 0 1-.494.081m6.523-1.977q-1.038 0-1.623-.466t-.635-1.329h.867q.04.579.423.832.384.253.958.253.615 0 .948-.263a.82.82 0 0 0 .332-.67q0-.395-.252-.618t-.857-.223h-.695v-.7h.554q.454 0 .777-.182.322-.193.322-.66 0-.293-.282-.516-.272-.223-.817-.223a2.2 2.2 0 0 0-.463.05 1.3 1.3 0 0 0-.404.163 1 1 0 0 0-.302.294q-.12.182-.151.446h-.867q.03-.487.231-.801a1.5 1.5 0 0 1 .504-.507q.303-.193.686-.274t.776-.081q.404 0 .757.081t.614.264q.273.172.424.436.162.263.161.628 0 .456-.262.74a1.07 1.07 0 0 1-.575.355v.02q.181.03.363.122a.84.84 0 0 1 .323.254q.141.152.232.385.09.223.09.527 0 .425-.18.74-.183.315-.485.517a2.3 2.3 0 0 1-.695.305 3.1 3.1 0 0 1-.797.1ZM69.28 8.17h.856v4.278l2.46-4.278h1.1v5.241h-.858V9.133l-2.46 4.278H69.28zm7.071.76h-1.865v-.76h4.587v.76h-1.865v4.481h-.857zm5.725 4.593q-.624 0-1.098-.203a2.1 2.1 0 0 1-.777-.568 2.5 2.5 0 0 1-.474-.872 3.9 3.9 0 0 1-.15-1.105q0-.588.18-1.085a2.7 2.7 0 0 1 .505-.871 2.4 2.4 0 0 1 .776-.568q.454-.203.988-.203.696 0 1.15.294.463.285.736.73.282.446.383.973.11.528.09 1.004h-3.901q-.01.345.08.66.09.303.293.547.2.232.514.375.312.142.736.142.545 0 .887-.254.353-.254.464-.77h.847q-.172.892-.757 1.338-.585.435-1.472.436m1.402-3.234a1.7 1.7 0 0 0-.141-.578 1.3 1.3 0 0 0-.313-.467 1.3 1.3 0 0 0-.463-.314 1.4 1.4 0 0 0-.585-.122q-.333 0-.605.122a1.35 1.35 0 0 0-.454.314 1.5 1.5 0 0 0-.302.477 1.8 1.8 0 0 0-.131.568zm4.803-2.119h2.41q.343 0 .655.05.323.05.575.193.252.132.403.385.151.255.151.65 0 .425-.201.689a1.5 1.5 0 0 1-.565.436v.01q.454.091.716.425.272.335.272.862 0 .335-.12.619a1.34 1.34 0 0 1-.323.486q-.213.204-.504.325a1.8 1.8 0 0 1-.636.111h-2.833zm2.672 4.511q.423 0 .635-.243a.92.92 0 0 0 .222-.629.73.73 0 0 0-.232-.567q-.231-.213-.776-.213h-1.674v1.652zM90.6 10.32q.555 0 .766-.203a.7.7 0 0 0 .222-.537q0-.324-.212-.497-.211-.182-.776-.182h-1.472v1.42zm-65.982 8.912a5.23 5.23 0 0 1 2.488-4.386 5.35 5.35 0 0 0-4.213-2.279c-1.772-.186-3.49 1.062-4.394 1.062-.92 0-2.312-1.043-3.808-1.012a5.61 5.61 0 0 0-4.722 2.881c-2.041 3.536-.518 8.734 1.437 11.593.978 1.4 2.121 2.964 3.618 2.908 1.464-.061 2.011-.934 3.778-.934 1.751 0 2.264.934 3.79.899 1.57-.025 2.561-1.406 3.506-2.82a11.6 11.6 0 0 0 1.602-3.266 5.05 5.05 0 0 1-3.081-4.646zm-2.884-8.545A5.15 5.15 0 0 0 22.911 7a5.23 5.23 0 0 0-3.386 1.753 4.9 4.9 0 0 0-1.208 3.55 4.33 4.33 0 0 0 3.417-1.616" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        451982: (e, t, i) => {
            i.d(t, {
                Icon40GooglePlayButtonEn: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40GooglePlayButtonEn", "google_play_button_en_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="google_play_button_en_40"><path fill-rule="evenodd" d="M42.296 24.277V22.55h5.914c.095.288.095.672.095 1.055 0 1.246-.381 2.876-1.526 4.026-1.145 1.246-2.48 1.821-4.388 1.821-3.434 0-6.391-2.875-6.391-6.326s2.957-6.327 6.391-6.327c1.908 0 3.244.767 4.293 1.726l-1.24 1.246c-.763-.671-1.813-1.246-3.148-1.246-2.48 0-4.484 2.012-4.484 4.6 0 2.589 1.908 4.602 4.484 4.602 1.621 0 2.575-.671 3.148-1.246.477-.48.858-1.247.954-2.205zm35.103 4.889h-1.813V17.184H77.4v11.982Zm12.21-11.982H93.9c2.003 0 3.911 1.438 3.911 3.738S95.903 24.66 93.9 24.66h-2.48v4.506h-1.813V17.184Zm9.158 11.982h1.812V17.184h-1.812zm3.053-6.135c.477-1.246 1.812-1.822 3.148-1.822 2.003 0 3.624 1.247 3.815 3.356v4.6h-1.717v-.958h-.095c-.477.575-1.05 1.15-2.29 1.15-1.526 0-2.957-1.054-2.957-2.684 0-1.725 1.717-2.684 3.434-2.684.763 0 1.527.288 1.813.48v-.096c-.096-.959-.954-1.534-1.908-1.534-.668 0-1.24.192-1.622.863zm10.969 3.642 2.003-5.176h1.908l-4.865 11.311h-1.812l1.812-4.026-3.148-7.285h1.908l2.099 5.176zm-27.186-2.78c-.382-.958-1.336-2.588-3.434-2.588-2.1 0-3.816 1.63-3.816 4.122 0 2.3 1.717 4.122 4.006 4.122 1.813 0 2.957-1.15 3.339-1.821l-1.335-.959c-.477.671-1.05 1.15-2.004 1.15s-1.526-.383-2.003-1.245l5.437-2.301zm-12.878-1.725c-.477-.48-1.24-.959-2.194-.959-2.003 0-3.91 1.822-3.91 4.122 0 2.301 1.812 4.027 3.91 4.027.954 0 1.717-.48 2.099-.96h.095v.576c0 1.534-.858 2.396-2.194 2.396-1.05 0-1.812-.766-2.003-1.437l-1.526.67C67.479 31.659 68.623 33 70.626 33c2.1 0 3.816-1.246 3.816-4.218v-7.285h-1.717zm-15.072 3.26c0-2.397 1.812-4.123 4.102-4.123s4.102 1.63 4.102 4.122c0 2.397-1.813 4.122-4.102 4.122s-4.102-1.821-4.102-4.122Zm-4.77-4.123c-2.289 0-4.101 1.726-4.101 4.122 0 2.3 1.812 4.122 4.102 4.122s4.102-1.725 4.102-4.122c0-2.492-1.813-4.122-4.102-4.122Zm38.539 1.63h2.575c1.24 0 2.004-1.054 2.099-2.109 0-.863-.763-2.013-2.099-2.013h-2.575zm11.924 3.834c0 .767.859 1.055 1.431 1.055.954 0 1.908-.767 2.099-1.917l-.142-.058c-.416-.17-.794-.326-1.48-.326-.858 0-1.908.288-1.908 1.246m-23.277-1.534c0-1.533 1.24-2.396 2.099-2.396.668 0 1.335.384 1.526.863zm-11.733.096c0 1.438 1.05 2.493 2.29 2.493s2.194-1.055 2.194-2.493-.954-2.492-2.194-2.492-2.29 1.055-2.29 2.492m-6.58 2.493c-1.24 0-2.29-1.055-2.29-2.493s1.05-2.492 2.29-2.492 2.29.959 2.29 2.492c0 1.438-1.05 2.493-2.29 2.493M50.594 25.33c0 1.438 1.05 2.493 2.29 2.493s2.288-1.055 2.288-2.493c0-1.533-1.049-2.492-2.289-2.492s-2.29 1.055-2.29 2.492Z" clip-rule="evenodd" /><path d="M64.258 13.2c-.83 0-1.53-.304-2.084-.901a3.15 3.15 0 0 1-.841-2.2c0-.873.283-1.612.841-2.198.551-.597 1.251-.901 2.082-.901.82 0 1.52.304 2.083.901.558.605.842 1.344.842 2.198-.01.875-.293 1.614-.842 2.197-.551.603-1.25.904-2.081.904m-24.703 0a2.83 2.83 0 0 1-2.093-.89c-.572-.588-.862-1.331-.862-2.209 0-.877.29-1.62.862-2.21a2.8 2.8 0 0 1 2.093-.889q.605 0 1.169.254c.368.165.668.39.89.665l.054.069-.62.636-.064-.079c-.35-.435-.818-.648-1.438-.648-.554 0-1.036.206-1.434.612-.4.409-.604.945-.604 1.593s.203 1.183.604 1.592c.398.406.88.612 1.434.612.59 0 1.086-.206 1.473-.612q.344-.361.42-.997h-1.987v-.894h2.84l.012.081c.02.15.041.306.041.45 0 .824-.238 1.492-.709 1.984-.535.583-1.235.88-2.081.88m32.845-.127h-.876l-2.683-4.488.023.808v3.678h-.876V7.129h1l.027.046 2.523 4.227-.023-.806V7.13h.885zm-14.724 0h-.888v-5.05H55.25V7.13h3.963v.894h-1.539v5.05zm-3.15 0h-.885V7.13h.885zm-4.974 0h-.885v-5.05h-1.54V7.13h3.964v.894h-1.54v5.05Zm-2.985-.01h-3.394V7.13h3.394v.894H44.06v1.631h2.262v.885H44.06v1.63h2.507v.895Zm16.257-1.379c.395.414.876.622 1.434.622a1.87 1.87 0 0 0 1.434-.622c.389-.406.585-.94.585-1.583s-.196-1.179-.583-1.583a1.92 1.92 0 0 0-1.434-.621 1.86 1.86 0 0 0-1.432.621c-.388.407-.585.94-.585 1.583s.194 1.179.58 1.583Zm-44.366 6.769L9.17 9.693a2.142 2.142 0 0 1 3.063-.989l.006.003 10.426 6.018zM9 11.015l8.408 8.368.032.034L9 28.336zM11.132 31a2.13 2.13 0 0 1-1.965-1.3l9.302-9.26 4.25 4.232-10.472 6.016-.003.002-.031.018h-.001a2.1 2.1 0 0 1-1.08.292m8.283-11.5 4.227-4.208 4.41 2.545.015.01.023.013a2.117 2.117 0 0 1-.013 3.732l-.007.004-.006.004-4.386 2.52z" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        590664: (e, t, i) => {
            i.d(t, {
                Icon40GooglePlayButtonRu: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40GooglePlayButtonRu", "google_play_button_ru_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="google_play_button_ru_40"><path d="M98.726 29.122h1.776V17.23h-1.776zm15.999-7.609-2.036 5.157h-.062l-2.113-5.157h-1.913l3.169 7.207-1.806 4.009h1.852l4.884-11.216zm-10.074 6.259c-.582 0-1.393-.291-1.393-1.01 0-.918 1.01-1.27 1.883-1.27.78 0 1.148.168 1.623.398a2.154 2.154 0 0 1-2.113 1.882m.215-6.518c-1.286 0-2.619.566-3.171 1.82l1.578.658c.337-.658.964-.872 1.623-.872.919 0 1.853.55 1.868 1.53v.122c-.322-.184-1.011-.459-1.852-.459-1.7 0-3.43.934-3.43 2.677 0 1.593 1.393 2.617 2.954 2.617 1.195 0 1.853-.534 2.267-1.163h.061v.919h1.715v-4.56c0-2.111-1.577-3.29-3.613-3.29Zm-10.978 1.708h-2.526v-4.078h2.526c1.328 0 2.082 1.1 2.082 2.039 0 .922-.754 2.039-2.082 2.039m-.046-5.732h-4.256v11.892h1.776v-4.505h2.48c1.969 0 3.904-1.425 3.904-3.694s-1.935-3.693-3.904-3.693M70.633 27.773c-1.227 0-2.254-1.026-2.254-2.436 0-1.425 1.027-2.468 2.254-2.468 1.213 0 2.162 1.043 2.162 2.468 0 1.41-.95 2.436-2.162 2.436m2.04-5.593h-.061c-.399-.475-1.166-.905-2.132-.905-2.025 0-3.88 1.778-3.88 4.062 0 2.268 1.855 4.03 3.88 4.03.966 0 1.733-.428 2.132-.919h.06v.582c0 1.55-.826 2.376-2.161 2.376-1.089 0-1.764-.782-2.04-1.44l-1.549.644c.445 1.073 1.626 2.39 3.589 2.39 2.085 0 3.85-1.226 3.85-4.215V21.52h-1.689v.66Zm2.913 6.942h1.78V17.23h-1.78v11.893Zm4.402-3.923c-.046-1.564 1.212-2.36 2.116-2.36.706 0 1.305.352 1.504.858zm5.521-1.349c-.338-.905-1.365-2.575-3.466-2.575-2.085 0-3.818 1.64-3.818 4.047 0 2.268 1.717 4.046 4.017 4.046 1.857 0 2.929-1.134 3.375-1.793l-1.38-.92c-.46.674-1.09 1.118-1.995 1.118-.904 0-1.549-.413-1.963-1.225l5.414-2.238zm-43.13-1.333v1.717h4.11c-.123.965-.444 1.67-.935 2.16-.598.598-1.534 1.257-3.174 1.257-2.532 0-4.51-2.038-4.51-4.567s1.978-4.567 4.51-4.567c1.364 0 2.361.535 3.097 1.226l1.212-1.21c-1.028-.982-2.392-1.733-4.31-1.733-3.466 0-6.379 2.82-6.379 6.284s2.913 6.284 6.38 6.284c1.87 0 3.28-.614 4.385-1.763 1.135-1.134 1.488-2.727 1.488-4.015 0-.4-.03-.766-.093-1.073zm10.546 5.256c-1.226 0-2.285-1.01-2.285-2.451 0-1.456 1.06-2.453 2.285-2.453 1.227 0 2.286.997 2.286 2.453 0 1.44-1.06 2.451-2.286 2.451m0-6.498c-2.24 0-4.064 1.702-4.064 4.047 0 2.329 1.825 4.046 4.064 4.046 2.24 0 4.065-1.717 4.065-4.046 0-2.345-1.826-4.047-4.065-4.047m8.866 6.498c-1.227 0-2.285-1.01-2.285-2.451 0-1.456 1.058-2.453 2.285-2.453s2.285.997 2.285 2.453c0 1.44-1.058 2.451-2.285 2.451m0-6.498c-2.239 0-4.064 1.702-4.064 4.047 0 2.329 1.825 4.046 4.064 4.046s4.064-1.717 4.064-4.046c0-2.345-1.825-4.047-4.064-4.047m20.993-8.46q-.56-.382-.766-1.127l.836-.331q.107.463.418.729.31.264.733.265.455 0 .778-.286a.9.9 0 0 0 .323-.708.87.87 0 0 0-.157-.502 1.1 1.1 0 0 0-.431-.36 1.34 1.34 0 0 0-.596-.132h-.489v-.795h.44q.446 0 .744-.245a.8.8 0 0 0 .299-.658.77.77 0 0 0-.278-.605 1.02 1.02 0 0 0-.691-.24.92.92 0 0 0-.63.224 1.17 1.17 0 0 0-.355.53l-.803-.332a1.97 1.97 0 0 1 .633-.865Q83.252 7 83.955 7q.538 0 .957.211.417.212.654.58.235.369.235.832 0 .862-.753 1.276v.05a1.7 1.7 0 0 1 .687.554q.265.365.265.887a1.7 1.7 0 0 1-.26.92 1.8 1.8 0 0 1-.716.65 2.2 2.2 0 0 1-1.019.235q-.663 0-1.221-.38m-6.379-5.682h.902v3.28l-.05 1.143h.05l2.658-4.423H81v5.93h-.903V9.7l.05-1.143h-.05l-2.699 4.505h-.993v-5.93Zm-4.926 5.077q.323 0 .57-.15.25-.149.381-.393a1.07 1.07 0 0 0-.951-1.586h-1.325v2.129zm-2.236-5.077h.911v2.111h1.259q.554 0 1.026.228t.754.663q.281.435.28 1.014 0 .58-.28 1.015-.283.435-.754.667a2.3 2.3 0 0 1-1.026.232h-2.17zm-3.51.861h-1.665v-.861H68.3v.861h-1.656v5.069h-.91zm-3.387 2.7-.662-1.818-.223-.68h-.05l-.223.68-.663 1.818zm-1.431-3.561h1.034l2.244 5.93H63.19l-.546-1.524h-2.418l-.546 1.524h-1.002l2.236-5.93Zm-3.941 3.288q-.555.488-1.366.488-.539 0-.973-.22a1.64 1.64 0 0 1-.683-.633 1.87 1.87 0 0 1-.249-.977V7.133h.92v1.789q0 .538.314.832.315.294.844.294.721 0 1.193-.563V7.133h.902v5.93h-.902zm-5.274.273-.662-1.818-.224-.68h-.05l-.223.68-.662 1.818h1.82Zm-1.433-3.561h1.036l2.243 5.93h-1.002l-.546-1.524h-2.417l-.547 1.524h-1.002zm-7.401 0h.91v2.874h.05l2.36-2.874h1.142v.05l-2.5 2.964 2.633 2.866v.05H46.27l-2.442-2.717h-.05v2.716h-.91v-5.93ZM37.92 12.79a2.95 2.95 0 0 1-1.114-1.119 3.1 3.1 0 0 1-.406-1.573q0-.863.406-1.574.405-.713 1.114-1.118.707-.405 1.568-.406 1.333 0 2.194.97l-.637.62a2.1 2.1 0 0 0-.683-.546 2 2 0 0 0-.866-.183q-.605 0-1.1.278a2.04 2.04 0 0 0-.787.787q-.29.51-.29 1.172t.29 1.172.787.786q.495.278 1.1.278 1.011 0 1.698-.837l.654.63a3.03 3.03 0 0 1-2.36 1.068 3.1 3.1 0 0 1-1.569-.405Zm-19.462 5.663L9.17 9.693a2.142 2.142 0 0 1 3.063-.989l.006.003 10.426 6.018zM9 11.015l8.408 8.368.032.034L9 28.336zM11.132 31a2.13 2.13 0 0 1-1.965-1.3l9.302-9.26 4.25 4.232-10.472 6.016-.003.002-.031.018h-.001a2.1 2.1 0 0 1-1.08.292m8.283-11.5 4.227-4.208 4.41 2.545.015.01.023.013a2.117 2.117 0 0 1-.013 3.732l-.007.004-.006.004-4.386 2.52z" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        827902: (e, t, i) => {
            i.d(t, {
                Icon40RustoreButtonEn: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40RustoreButtonEn", "rustore_button_en_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="rustore_button_en_40"><path fill-rule="evenodd" d="M63.773 31.4q-1.672 0-2.952-.89a4.35 4.35 0 0 1-1.689-2.428l1.98-.342q.495.907 1.108 1.351.615.428 1.57.428.887 0 1.45-.394a1.29 1.29 0 0 0 .58-1.111q0-.514-.324-.856a2.4 2.4 0 0 0-.82-.581 15 15 0 0 0-1.313-.496 15 15 0 0 1-1.876-.736 3.7 3.7 0 0 1-1.263-1.077q-.512-.719-.512-1.847 0-1.044.512-1.813a3.4 3.4 0 0 1 1.416-1.198q.888-.41 1.996-.41 1.57 0 2.696.821 1.126.82 1.586 2.258l-1.945.325q-.324-.735-.904-1.13-.58-.393-1.364-.393-.802 0-1.348.377-.546.376-.546 1.06 0 .513.307.855.324.342.819.565t1.33.513q1.144.393 1.877.77.734.375 1.245 1.094.53.718.53 1.83 0 1.044-.564 1.83-.546.788-1.5 1.215-.94.41-2.082.41m-18.103-.171h2.406l-3.344-4.584q1.348-.342 2.15-1.317.819-.992.819-2.343 0-1.112-.546-1.967a3.65 3.65 0 0 0-1.519-1.351q-.973-.495-2.2-.496H39v12.058h2.047v-4.43h1.45zm-4.623-6.311v-3.866h2.389q.955 0 1.552.548.614.53.614 1.385t-.614 1.403q-.597.53-1.552.53zm10.101 6.003q.767.48 1.706.479.802 0 1.501-.393a3.2 3.2 0 0 0 1.126-1.112l.393 1.334h1.467v-8.894h-1.962v5.148q0 .94-.563 1.557-.563.598-1.416.598-.836 0-1.382-.598-.529-.6-.529-1.557v-5.148h-1.962v5.37q0 1.061.427 1.9.444.837 1.194 1.316m23.933.308.17-1.71h-1.825q-.99 0-.99-.992v-4.482h2.645v-1.71h-2.644V19.77h-1.468l-.494 2.565h-1.45v1.71h1.45v4.482q0 1.317.75 2.018.75.684 2.201.684zm5.948.171q-1.366 0-2.457-.581a4.4 4.4 0 0 1-1.689-1.642q-.597-1.061-.597-2.395t.597-2.377a4.26 4.26 0 0 1 1.689-1.642q1.092-.6 2.457-.599 1.365 0 2.44.599 1.09.581 1.688 1.642.614 1.043.614 2.377 0 1.335-.614 2.395a4.26 4.26 0 0 1-1.689 1.642q-1.075.58-2.44.581Zm0-1.796q1.194 0 1.945-.77.75-.786.75-2.052t-.75-2.035q-.752-.787-1.945-.787-1.195 0-1.945.787-.75.77-.75 2.035t.75 2.052q.75.77 1.945.77m8.086-7.269h-1.467v8.894h1.962v-5.25q0-1.762 1.74-1.762h1.126l-.171-1.882h-.375q-.836 0-1.433.29-.58.292-1.007.993zM102.3 26.68q0 .257-.034.633h-7.131q.135 1.044.853 1.676.716.616 1.825.616.75 0 1.348-.29.614-.292.938-.787l1.843.307a3.65 3.65 0 0 1-1.655 1.899q-1.16.667-2.593.667-1.331 0-2.389-.581a4.36 4.36 0 0 1-1.638-1.642q-.58-1.061-.58-2.395t.58-2.377a4.2 4.2 0 0 1 1.638-1.642q1.058-.6 2.389-.599 1.33 0 2.371.599a4.1 4.1 0 0 1 1.638 1.625q.597 1.026.597 2.291m-4.606-2.804a2.47 2.47 0 0 0-1.553.513q-.648.513-.887 1.385h4.913a2.63 2.63 0 0 0-.92-1.368q-.649-.53-1.553-.53" clip-rule="evenodd" /><path d="M45.403 14.371h-1.121l-.546-1.667H40.83l-.555 1.667h-1.092l2.48-6.994h1.34zm-3.135-5.942-1.121 3.353h2.291l-1.09-3.353zm6.504 5.942h-1.24l-1.766-5.238h1.082l1.3 4.147h.049l1.399-4.147h1.041zm4.825-5.367q.942 0 1.468.546.526.545.526 1.507v3.314h-.804l-.11-.565q-.742.694-1.666.694-.773 0-1.25-.446-.465-.447-.466-1.19 0-.784.585-1.231.585-.446 1.568-.446h1.12v-.14q0-.585-.267-.892-.258-.308-.744-.308-.307 0-.556.14a.8.8 0 0 0-.367.386h-1.061q.178-.664.724-1.012.555-.357 1.3-.357m-1.27 3.81q0 .376.248.605.258.228.664.228.338 0 .695-.159t.635-.417v-1.11h-1.111q-.526 0-.834.227a.75.75 0 0 0-.297.625Zm5.876 1.557H57.18V9.133h1.022v5.238Zm-.506-6.091a.63.63 0 0 1-.466-.179.63.63 0 0 1-.179-.466q0-.288.179-.456A.63.63 0 0 1 57.697 7q.288 0 .456.179.18.168.179.456a.63.63 0 0 1-.179.466.6.6 0 0 1-.456.179m3.198 6.091h-1.021V7.179h1.021zm3.695-5.367q.941 0 1.467.546.525.545.526 1.507v3.314h-.803l-.11-.565q-.744.694-1.666.694-.774 0-1.25-.446-.466-.447-.466-1.19 0-.784.585-1.231.585-.446 1.567-.446h1.121v-.14q0-.585-.268-.892-.258-.308-.744-.308-.308 0-.555.14a.8.8 0 0 0-.367.386h-1.062q.179-.664.724-1.012.555-.357 1.3-.357Zm-1.27 3.81q0 .376.247.605.258.228.665.228a1.7 1.7 0 0 0 .694-.159q.358-.159.635-.417v-1.11h-1.11q-.527 0-.834.227a.74.74 0 0 0-.298.625Zm7.344-3.81q.665 0 1.16.337.497.328.764.943.268.615.268 1.428 0 .824-.297 1.459a2.34 2.34 0 0 1-.814.982q-.525.347-1.22.347a2.06 2.06 0 0 1-1.439-.575l-.09.446h-.803V7.179h1.022v2.37q.664-.545 1.449-.545m-.318 4.633q.684 0 1.072-.516.386-.516.386-1.409 0-.853-.367-1.349a1.15 1.15 0 0 0-.992-.506q-.615 0-1.23.496v2.867q.506.417 1.131.417m4.894.734h-1.022V7.179h1.022zm6.055-2.768q0 .08-.03.407h-3.64q.048.794.416 1.22.377.417 1.041.417.347 0 .626-.13a.83.83 0 0 0 .406-.386h1.052a1.86 1.86 0 0 1-.774 1.012q-.555.357-1.36.357-.733 0-1.289-.337a2.23 2.23 0 0 1-.843-.953q-.297-.625-.298-1.458 0-.833.288-1.448.288-.625.814-.963.535-.337 1.25-.337.705 0 1.23.317.535.318.823.913.288.585.288 1.37Zm-2.341-1.766q-.546 0-.883.377-.337.367-.427 1.042h2.629q-.08-.675-.427-1.042-.337-.377-.892-.377m7.239 4.534h-1.022V9.133h1.022zm-.506-6.091a.63.63 0 0 1-.466-.179.63.63 0 0 1-.178-.466.6.6 0 0 1 .178-.456.63.63 0 0 1 .466-.179.6.6 0 0 1 .457.179.6.6 0 0 1 .178.456.63.63 0 0 1-.178.466.6.6 0 0 1-.457.179m4.618.724q.555 0 .972.258.426.258.665.744.237.476.238 1.121v3.244h-1.022v-3.214q0-.606-.298-.943-.288-.337-.813-.337-.615 0-1.18.536v3.958h-1.023V9.133h.804l.1.516a3.2 3.2 0 0 1 .763-.486 2 2 0 0 1 .794-.159" /><path fill-rule="evenodd" d="M19.52 32c-5.43 0-8.146 0-9.833-1.688S8 25.91 8 20.48v-.96c0-5.43 0-8.146 1.687-9.833S14.089 8 19.52 8h.96c5.43 0 8.145 0 9.832 1.687S32 14.089 32 19.52v.96c0 5.43 0 8.145-1.688 9.832S25.91 32 20.48 32zm5.387-8.453 1.622.405a1.162 1.162 0 0 0 1.447-1.122v-7.816c0-.663-.454-1.242-1.1-1.403l-4.652-1.162a1.162 1.162 0 0 0-1.446 1.123v1.409l-2.93-.732A1.162 1.162 0 0 0 16.4 15.37v1.41l-2.93-.733a1.162 1.162 0 0 0-1.447 1.123v7.815c0 .664.453 1.242 1.1 1.404l4.651 1.161a1.162 1.162 0 0 0 1.447-1.122v-7.804c0-.66-.417-1.042-.568-1.16a.07.07 0 0 1-.016-.093.08.08 0 0 1 .091-.033c.613.185 1.2.813 1.258 1.603l.202 5.969a.47.47 0 0 0 .317.43l1.646.411a1.162 1.162 0 0 0 1.447-1.123v-7.803c0-.66-.416-1.042-.567-1.159a.07.07 0 0 1-.016-.094.08.08 0 0 1 .091-.033c.613.185 1.2.813 1.258 1.603l.202 5.968a.47.47 0 0 0 .34.436Z" clip-rule="evenodd" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        135608: (e, t, i) => {
            i.d(t, {
                Icon40RustoreButtonRu: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon40RustoreButtonRu", "rustore_button_ru_40", "0 0 126 40", '<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 126 40" id="rustore_button_ru_40"><path fill-rule="evenodd" d="M63.773 31.4q-1.672 0-2.952-.89a4.35 4.35 0 0 1-1.689-2.428l1.98-.342q.495.907 1.108 1.351.615.428 1.57.428.887 0 1.45-.394a1.29 1.29 0 0 0 .58-1.111q0-.514-.324-.856a2.4 2.4 0 0 0-.82-.581 15 15 0 0 0-1.313-.496 15 15 0 0 1-1.876-.736 3.7 3.7 0 0 1-1.263-1.077q-.512-.719-.512-1.847 0-1.044.512-1.813a3.4 3.4 0 0 1 1.416-1.198q.888-.41 1.996-.41 1.57 0 2.696.821 1.126.82 1.586 2.258l-1.945.325q-.324-.735-.904-1.13-.58-.393-1.364-.393-.802 0-1.348.377-.546.376-.546 1.06 0 .513.307.855.324.342.819.565t1.33.513q1.144.393 1.877.77.734.375 1.245 1.094.53.718.53 1.83 0 1.044-.564 1.83-.546.788-1.5 1.215-.94.41-2.082.41m-18.103-.171h2.406l-3.344-4.584q1.348-.342 2.15-1.317.819-.992.819-2.343 0-1.112-.546-1.967a3.65 3.65 0 0 0-1.519-1.351q-.973-.495-2.2-.496H39v12.058h2.047v-4.43h1.45zm-4.623-6.311v-3.866h2.389q.955 0 1.552.548.614.53.614 1.385t-.614 1.403q-.597.53-1.552.53zm10.101 6.003q.767.48 1.706.479.802 0 1.501-.393a3.2 3.2 0 0 0 1.126-1.112l.393 1.334h1.467v-8.894h-1.962v5.148q0 .94-.563 1.557-.563.598-1.416.598-.836 0-1.382-.598-.529-.6-.529-1.557v-5.148h-1.962v5.37q0 1.061.427 1.9.444.837 1.194 1.316m23.933.308.17-1.71h-1.825q-.99 0-.99-.992v-4.482h2.645v-1.71h-2.644V19.77h-1.468l-.494 2.565h-1.45v1.71h1.45v4.482q0 1.317.75 2.018.75.684 2.201.684zm5.948.171q-1.366 0-2.457-.581a4.4 4.4 0 0 1-1.689-1.642q-.597-1.061-.597-2.395t.597-2.377a4.26 4.26 0 0 1 1.689-1.642q1.092-.6 2.457-.599 1.365 0 2.44.599 1.09.581 1.688 1.642.614 1.043.614 2.377 0 1.335-.614 2.395a4.26 4.26 0 0 1-1.689 1.642q-1.075.58-2.44.581Zm0-1.796q1.194 0 1.945-.77.75-.786.75-2.052t-.75-2.035q-.752-.787-1.945-.787-1.195 0-1.945.787-.75.77-.75 2.035t.75 2.052q.75.77 1.945.77m8.086-7.269h-1.467v8.894h1.962v-5.25q0-1.762 1.74-1.762h1.126l-.171-1.882h-.375q-.836 0-1.433.29-.58.292-1.007.993zM102.3 26.68q0 .257-.034.633h-7.131q.135 1.044.853 1.676.716.616 1.825.616.75 0 1.348-.29.614-.292.938-.787l1.843.307a3.65 3.65 0 0 1-1.655 1.899q-1.16.667-2.593.667-1.331 0-2.389-.581a4.36 4.36 0 0 1-1.638-1.642q-.58-1.061-.58-2.395t.58-2.377a4.2 4.2 0 0 1 1.638-1.642q1.058-.6 2.389-.599 1.33 0 2.371.599a4.1 4.1 0 0 1 1.638 1.625q.597 1.026.597 2.291m-4.606-2.804a2.47 2.47 0 0 0-1.553.513q-.648.513-.887 1.385h4.913a2.63 2.63 0 0 0-.92-1.368q-.649-.53-1.553-.53" clip-rule="evenodd" /><path d="M39 15.791v-2.715h.209a.8.8 0 0 0 .536-.189q.22-.198.368-.686.16-.497.249-1.372L40.74 7h4.343v6.076h1.044v2.695h-1.044v-1.76h-5.04v1.78zm1.78-2.715h3.23V7.935h-2.306l-.288 2.953q-.09.906-.24 1.393-.138.487-.397.745zm8.572 1.064q-.735 0-1.292-.338a2.2 2.2 0 0 1-.855-.954q-.299-.627-.298-1.472 0-.835.298-1.452.298-.627.855-.955.555-.338 1.292-.338.736 0 1.282.338.556.328.855.955.298.616.298 1.452 0 .845-.298 1.472-.298.616-.855.954-.546.338-1.282.338m0-.875q.646 0 1.014-.497.368-.507.368-1.392 0-.875-.368-1.373-.367-.497-1.014-.497-.646 0-1.014.497-.368.498-.368 1.373 0 .885.368 1.392.367.497 1.014.497m5.92.875q-.745 0-1.302-.338a2.2 2.2 0 0 1-.855-.954q-.297-.627-.298-1.462 0-.836.298-1.462.299-.627.845-.955.557-.338 1.312-.338.836 0 1.412.408.587.398.765 1.143h-1.063q-.328-.675-1.084-.676-.676 0-1.053.497-.368.498-.368 1.383c0 .885.122 1.05.368 1.382q.377.497 1.063.497.418 0 .726-.199a.97.97 0 0 0 .417-.567h1.064a1.98 1.98 0 0 1-.795 1.204q-.606.438-1.452.437m5.535-.129h-1.024V9.635h-1.71V8.76h4.444v.875h-1.71zm6.238-5.251h1.044l-1.929 5.65q-.218.636-.467.974a1.35 1.35 0 0 1-.616.478q-.368.14-.974.139h-.398v-.905h.427q.329 0 .517-.07a.64.64 0 0 0 .308-.238 2.4 2.4 0 0 0 .249-.507l.05-.14-2.147-5.38h1.103l1.501 4.008h.05l1.282-4.008Zm3.147 5.251h-1.024v-5.25h4.294v5.25H72.44V9.635h-2.247v4.376Zm8.266-3.103V8.76h1.024v5.251h-1.024v-2.228h-2.326v2.228h-1.024v-5.25h1.024v2.147zm4.814 3.232q-.734 0-1.292-.338a2.2 2.2 0 0 1-.855-.954q-.298-.627-.298-1.472 0-.835.298-1.452.299-.627.855-.955.557-.338 1.292-.338c.735 0 .918.113 1.283.338q.556.328.854.955.3.616.299 1.452 0 .845-.299 1.472-.297.616-.854.954-.547.339-1.283.338m0-.875q.647 0 1.014-.497.368-.507.368-1.392 0-.875-.368-1.373-.367-.497-1.014-.497-.645 0-1.014.497-.367.498-.367 1.373 0 .885.367 1.392.369.497 1.014.497m9.703-2.019q.925.32.925 1.243 0 .697-.507 1.114-.507.408-1.362.408h-2.356v-5.25h2.297q.795 0 1.272.377.487.367.487.975a1.1 1.1 0 0 1-.199.656 1.26 1.26 0 0 1-.556.428v.05ZM90.7 9.586v1.312h1.253q.348 0 .546-.179a.6.6 0 0 0 .21-.477.6.6 0 0 0-.21-.477q-.209-.18-.546-.18H90.7Zm1.312 3.6q.398 0 .627-.21a.7.7 0 0 0 .238-.556.67.67 0 0 0-.238-.547q-.23-.21-.627-.209H90.7v1.522z" /><path fill-rule="evenodd" d="M19.52 32c-5.43 0-8.146 0-9.833-1.688S8 25.91 8 20.48v-.96c0-5.43 0-8.146 1.687-9.833S14.089 8 19.52 8h.96c5.43 0 8.145 0 9.832 1.687S32 14.089 32 19.52v.96c0 5.43 0 8.145-1.688 9.832S25.91 32 20.48 32zm5.387-8.453 1.622.405a1.162 1.162 0 0 0 1.447-1.122v-7.816c0-.663-.454-1.242-1.1-1.403l-4.652-1.162a1.162 1.162 0 0 0-1.446 1.123v1.409l-2.93-.732A1.162 1.162 0 0 0 16.4 15.37v1.41l-2.93-.733a1.162 1.162 0 0 0-1.447 1.123v7.815c0 .664.453 1.242 1.1 1.404l4.651 1.161a1.162 1.162 0 0 0 1.447-1.122v-7.804c0-.66-.417-1.042-.568-1.16a.07.07 0 0 1-.016-.093.08.08 0 0 1 .091-.033c.613.185 1.2.813 1.258 1.603l.202 5.969a.47.47 0 0 0 .317.43l1.646.411a1.162 1.162 0 0 0 1.447-1.123v-7.803c0-.66-.416-1.042-.567-1.159a.07.07 0 0 1-.016-.094.08.08 0 0 1 .091-.033c.613.185 1.2.813 1.258 1.603l.202 5.968a.47.47 0 0 0 .34.436Z" clip-rule="evenodd" /></symbol>', 126, 40, !1, void 0)
        }
        ,
        524598: (e, t, i) => {
            i.d(t, {
                Icon24BookmarkOutline: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon24BookmarkOutline", "bookmark_outline_24", "0 0 24 24", '<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="bookmark_outline_24"><path fill="currentColor" fill-rule="evenodd" d="M11.083 3h1.834c1.056 0 1.903 0 2.588.056.704.057 1.316.179 1.88.466a4.8 4.8 0 0 1 2.093 2.093c.287.564.408 1.176.466 1.88C20 8.18 20 9.027 20 10.083v7.615c0 .773 0 1.414-.045 1.914-.045.494-.145 1.026-.482 1.454a2.46 2.46 0 0 1-1.896.935c-.544.007-1.027-.238-1.447-.503-.424-.268-.933-.658-1.546-1.128l-1.617-1.24c-.607-.466-.714-.526-.797-.549a.66.66 0 0 0-.34 0c-.083.022-.19.083-.797.549l-1.617 1.24c-.613.47-1.123.86-1.546 1.128-.42.265-.903.51-1.447.503a2.46 2.46 0 0 1-1.896-.936c-.337-.427-.437-.96-.482-1.453C4 19.112 4 18.47 4 17.698v-7.615c0-1.056 0-1.903.056-2.588.057-.704.179-1.316.466-1.88a4.8 4.8 0 0 1 2.093-2.093c.564-.287 1.176-.409 1.88-.466C9.18 3 10.027 3 11.083 3M8.641 4.85c-.593.048-.941.14-1.209.276a3 3 0 0 0-1.306 1.306c-.137.268-.228.616-.276 1.21-.05.603-.05 1.376-.05 2.48v7.532c0 .828 0 1.387.038 1.794.038.414.103.503.103.503a.66.66 0 0 0 .506.25s.11-.003.461-.225c.346-.218.79-.558 1.448-1.062l1.582-1.213.1-.077c.44-.338.85-.654 1.327-.782a2.45 2.45 0 0 1 1.27 0c.478.128.888.444 1.326.782l.101.077 1.582 1.213c.658.504 1.102.844 1.448 1.062.351.222.461.225.461.225a.66.66 0 0 0 .506-.25s.065-.089.103-.503c.037-.407.038-.966.038-1.794v-7.532c0-1.104 0-1.877-.05-2.48-.048-.594-.14-.942-.276-1.21a3 3 0 0 0-1.306-1.306c-.268-.137-.617-.228-1.21-.276-.603-.05-1.376-.05-2.48-.05h-1.756c-1.104 0-1.877 0-2.48.05" clip-rule="evenodd" /></symbol>', 24, 24, !1, void 0)
        }
        ,
        525652: (e, t, i) => {
            i.d(t, {
                Icon56ErrorOutline: () => o
            });
            var o = (0,
            i(844990).makeIcon)("Icon56ErrorOutline", "error_outline_56", "0 0 56 56", '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="error_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path fill="currentColor" fill-rule="nonzero" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4m0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7m0 27a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-17.5a1.5 1.5 0 0 1 1.5 1.5v11l-.007.144A1.5 1.5 0 0 1 26.5 29V18l.007-.144A1.5 1.5 0 0 1 28 16.5" /></g></symbol>', 56, 56, !1, void 0)
        }
        ,
        608832: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                root: "AudioMobileAppsPopup__root--v6zly",
                qrCode: "AudioMobileAppsPopup__qrCode--jt3T0"
            }
        }
        ,
        71374: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                container: "AudioSnippetsBlockNetworkError__container--vgYWg"
            }
        }
        ,
        895394: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                container: "styles__container--FcWEL",
                slice: "styles__slice--Vdl1z"
            }
        }
        ,
        313032: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                container: "styles__container--MAlKN",
                inner: "styles__inner--9jvLK",
                before: "styles__before--rRfCd",
                content: "styles__content--nJQS1",
                contentCard: "styles__contentCard--Kby7H",
                contentCell: "styles__contentCell--UEwtg",
                after: "styles__after--BZv6Q",
                afterCellBefore: "styles__afterCellBefore--wq2j3"
            }
        }
        ,
        394014: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                block: "styles__block--doCE5",
                scrollParent: "styles__scrollParent--HJY8O"
            }
        }
        ,
        959473: (e, t, i) => {
            i.d(t, {
                default: () => o
            });
            const o = {
                container: "styles__container--sN4fb",
                fixed: "styles__fixed--SBR51"
            }
        }
    }, u = {};
    function __webpack_require__(e) {
        var t = u[e];
        if (void 0 !== t)
            return t.exports;
        var i = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return d[e].call(i.exports, i, i.exports, __webpack_require__),
        i.loaded = !0,
        i.exports
    }
    __webpack_require__.m = d,
    __webpack_require__.amdO = {},
    e = [],
    __webpack_require__.O = (t, i, o, a) => {
        if (!i) {
            var s = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [i,o,a] = e[l], n = !0, r = 0; r < i.length; r++)
                    (!1 & a || s >= a) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](i[r]))) ? i.splice(r--, 1) : (n = !1,
                    a < s && (s = a));
                if (n) {
                    e.splice(l--, 1);
                    var c = o();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        a = a || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > a; l--)
            e[l] = e[l - 1];
        e[l] = [i, o, a]
    }
    ,
    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    i = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
    __webpack_require__.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var s = {};
        t = t || [null, i({}), i([]), i(i)];
        for (var n = 2 & o && e; "object" == typeof n && !~t.indexOf(n); n = i(n))
            Object.getOwnPropertyNames(n).forEach((t => s[t] = () => e[t]));
        return s.default = () => e,
        __webpack_require__.d(a, s),
        a
    }
    ,
    __webpack_require__.d = (e, t) => {
        for (var i in t)
            __webpack_require__.o(t, i) && !__webpack_require__.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = (e, t) => Promise.all(Object.keys(__webpack_require__.f).reduce(( (i, o) => (__webpack_require__.f[o](e, i, t),
    i)), [])),
    __webpack_require__.u = e => 25305 === e ? "web/chunks/06662127.async.612b3267.js" : 77472 === e ? "web/chunks/e829a12e.async.4ce4243a.js" : 6827 === e ? "web/chunks/podcasts_web.dd2913ee.js" : 88651 === e ? "web/chunks/bookmarkClipPost.c4a4aad1.js" : 24639 === e ? "web/chunks/plugins_maps_mmrgl_script_chunk.41da7321.js" : 30685 === e ? "web/chunks/plugins_maps_mmrgl_style_chunk.84bd944b.js" : 45458 === e ? "web/chunks/hls.c44b551b.js" : 26262 === e ? "web/chunks/c45e5f52.async.4435ee5b.js" : 48041 === e ? "web/chunks/2b5698e9.async.b6523828.js" : 50777 === e ? "web/chunks/c1ff626b.async.24b81a4a.js" : 10425 === e ? "web/chunks/e243eb58.async.dad7eae2.js" : 98908 === e ? "web/chunks/09849af8.async.fb6a9fe1.js" : 27107 === e ? "web/chunks/a0cd3896.async.4cd36316.js" : 34190 === e ? "web/chunks/audio_config_legacy.3029fc4d.js" : 18586 === e ? "web/chunks/audio_config_overrides.9e963a82.js" : 98271 === e ? "web/chunks/audio_web_globalPlayerImpl.9ec9e6e7.js" : 30072 === e ? "web/chunks/showCaptchaPopup.057055a1.js" : 19072 === e ? "web/chunks/left_menu_store.9491679d.js" : 42255 === e ? "web/chunks/wikiModalExampleInitiator.72ccab85.js" : 66372 === e ? "web/chunks/5e232ef7.async.90ea04db.js" : 56965 === e ? "web/chunks/stories_web_lib.2f79f11c.js" : 42943 === e ? "web/chunks/video_web_lib.8eb56391.js" : 53927 === e ? "web/chunks/questions_boxes_web.a88b45af.js" : 74336 === e ? "web/chunks/show_audio_playlist.6f6976c9.js" : 5100 === e ? "web/chunks/4dcbc2eb.async.72a255c1.js" : 9320 === e ? "web/chunks/a987a0e4.async.16c0d87a.js" : 84577 === e ? "web/chunks/2da538e6.async.0f33ee52.js" : 17895 === e ? "web/chunks/money_transfer_box.38b4f1d7.js" : 50905 === e ? "web/chunks/money_transfer.7d105edb.js" : 26488 === e ? "web/chunks/8d1050c0.async.b316cf12.js" : 28166 === e ? "web/chunks/3fec45c8.async.d9ef9d7a.js" : 79398 === e ? "web/chunks/bacc453b.async.469a2d6e.js" : 76944 === e ? "web/chunks/7519f4b3.async.9dabcff5.js" : 70408 === e ? "web/chunks/1a92c3d4.async.4299204e.js" : 32535 === e ? "web/chunks/26536f1e.async.95109751.js" : 24950 === e ? "web/chunks/a15147e3.async.ab51b7ab.js" : 19129 === e ? "web/chunks/5f042a86.async.05f7c3a1.js" : 84835 === e ? "web/chunks/unauth_action_box.f89d810d.js" : 6086 === e ? "web/chunks/MiniAppsLifecycle.2f1f84a6.js" : 55035 === e ? "web/chunks/c9877ede.async.52348b8f.js" : 59886 === e ? "web/chunks/StoryPublisherV2.4bdb8ae1.js" : 68425 === e ? "web/chunks/sticker-gift-modal-legacy.ab0f4e90.js" : 73214 === e ? "web/chunks/SilentModeForms.ec537b9f.js" : 52007 === e ? "web/chunks/gift-modal-legacy.875a2317.js" : 54252 === e ? "web/chunks/c3c289c8.async.38890324.js" : 40865 === e ? "web/chunks/a0063268.async.81a4de24.js" : 2166 === e ? "web/chunks/showDonutSubscriptionModal.acec1372.js" : 49222 === e ? "web/chunks/8f5b5ee1.async.f2790f0f.js" : 4752 === e ? "web/chunks/c4851f31.async.783ddf3f.js" : 29311 === e ? "web/chunks/feed-client-nav-skeleton.4358a138.js" : 56091 === e ? "web/chunks/feed-client-nav-async-right-block.28f19d60.js" : 71980 === e ? "web/chunks/39987fc8.async.5b260624.js" : 21955 === e ? "web/chunks/pageDocs.a2ec1f18.js" : 235 === e ? "web/chunks/3f62fcb2.async.294aa64e.js" : 17675 === e ? "web/chunks/8801b7ee.async.1efa0c3d.js" : 81062 === e ? "web/chunks/890facca.async.0719c647.js" : 29549 === e ? "web/chunks/b5a96feb.async.20d61593.js" : 14760 === e ? "web/chunks/bc17645e.async.57324810.js" : 63319 === e ? "web/chunks/7a48b9e6.async.75798ce6.js" : 40676 === e ? "web/chunks/94356cb1.async.48194fa1.js" : 93001 === e ? "web/chunks/pageFriends.73b18242.js" : 29862 === e ? "web/chunks/70b52e4f.async.e364ffc5.js" : 5624 === e ? "web/chunks/2e4c2c7e.async.8cdb939c.js" : 19959 === e ? "web/chunks/pageMarketCatalog.a7234667.js" : 11100 === e ? "web/chunks/4f439dd3.async.782505f3.js" : 34042 === e ? "web/chunks/9c227a21.async.4cd6312b.js" : 2181 === e ? "web/chunks/dcc9c1dc.async.4a72a9a6.js" : 8441 === e ? "web/chunks/PhotosVKCOMApp.fd6dc3a8.js" : 1715 === e ? "web/chunks/AudioLongtapModal.aded6883.js" : 31563 === e ? "web/chunks/6fe0ab40.async.2d24d8bd.js" : 94322 === e ? "web/chunks/088f4ff9.async.8ee5b371.js" : 75908 === e ? "web/chunks/6016368a.async.cd33a403.js" : 33641 === e ? "web/chunks/audio_modals_MusicTrackList.a5a53fb6.js" : 51713 === e ? "web/chunks/voice_message_player.a6631853.js" : 9925 === e ? "web/chunks/speech.61ec51e3.js" : 82915 === e ? "web/chunks/MarketItemsCarousel.b3e90ca7.js" : 50371 === e ? "web/chunks/stackblur-canvas.427179ab.js" : 31095 === e ? "web/chunks/PodcastEpisodeModal.075644ff.js" : 93859 === e ? "web/chunks/386a9762.async.0825071a.js" : 31427 === e ? "web/chunks/53dae211.async.6daba29c.js" : 91772 === e ? "web/chunks/8472ac59.async.7e21cafd.js" : 36502 === e ? "web/chunks/NewStickerPicker.2d0b458f.js" : 46761 === e ? "web/chunks/e35ed02d.async.72a18b7c.js" : 98462 === e ? "web/chunks/f6f9fb2f.async.2a15fa80.js" : 26651 === e ? "web/chunks/c84a4d28.async.7f49ed6c.js" : 94799 === e ? "web/chunks/739254e5.async.54a58938.js" : 81606 === e ? "web/chunks/272f2e09.async.455d77b6.js" : 56329 === e ? "web/chunks/182fd4cf.async.9349b567.js" : 38322 === e ? "web/chunks/82a605b7.async.fa845dc4.js" : 17566 === e ? "web/chunks/ca0ebb5a.async.de85d787.js" : 34861 === e ? "web/chunks/5cb5df70.async.0ef3c3d0.js" : 96557 === e ? "web/chunks/f6487f90.async.b30269b5.js" : 64001 === e ? "web/chunks/d429d366.async.81cf793c.js" : 61837 === e ? "web/chunks/253d3e42.async.d2851870.js" : 87690 === e ? "web/chunks/094a4065.async.c3818a7f.js" : 11093 === e ? "web/chunks/fastchat_reforged_v150.18a353e7.js" : 12334 === e ? "web/chunks/stories-perf-metrics.c36bb0ce.js" : 96853 === e ? "web/chunks/96aca16e.async.205e3628.js" : 79934 === e ? "web/chunks/e4ca2309.async.7359d9b4.js" : 51943 === e ? "web/chunks/VideoUpload.07a939fc.js" : 29360 === e ? "web/chunks/dbac3ddf.async.99c8e947.js" : 69096 === e ? "web/chunks/fb38e3a3.async.695b3e46.js" : 10504 === e ? "web/chunks/StoriesCreatorVKApp.ca8f3115.js" : 35577 === e ? "web/chunks/CommunityPage_SimilarGroups.446ae762.js" : 17148 === e ? "web/chunks/CommunityPage_DonutBanner.2d50c267.js" : 74633 === e ? "web/chunks/CommunityPage_GoalsOnboarding.48823200.js" : 95991 === e ? "web/chunks/CommunityPage_LevelsAdminOnboarding.2fcabd16.js" : 85386 === e ? "web/chunks/donut_modals.ed20f614.js" : 43162 === e ? "web/chunks/framer-motion-entrypoint.565434fd.js" : 54833 === e ? "web/chunks/performance-stats.1cd793fd.js" : 9635 === e ? "web/chunks/9635.fa2ccb19.js" : 54932 === e ? "web/chunks/a8cd0c13.async.6ee896fb.js" : 32643 === e ? "web/chunks/story_blocks.f19777bd.js" : 6694 === e ? "web/chunks/menu_settings.865ce31e.js" : 66434 === e ? "web/chunks/ReportsProfileModal.345d7804.js" : 99595 === e ? "web/chunks/ReportForm.fee34d45.js" : 7894 === e ? "web/chunks/StickersKit-AgeRestrictionModal.2421b89c.js" : 43451 === e ? "web/chunks/MiniAppService_MiniApp.dea49834.js" : 23666 === e ? "web/chunks/rlottie.1d964a94.js" : 72394 === e ? "web/chunks/vkcom-kit-qr-code-base.781fdc4a.js" : 25153 === e ? "web/chunks/" + e + ".48cd7798.js" : 85128 === e ? "web/chunks/" + e + ".da282bce.js" : 42734 === e ? "web/chunks/marusia-fc-sdk.56be293d.js" : 99370 === e ? "web/chunks/VideoEditorModal.9c556425.js" : 95805 === e ? "web/chunks/PublishClipToVideoModal.491831a0.js" : 99473 === e ? "web/chunks/3b5cde2d.async.e67ad4c4.js" : 73509 === e ? "web/chunks/sharedVideoUploadState.d3bcabca.js" : 91906 === e ? "web/chunks/VideoUploadModal.5411f829.js" : 74205 === e ? "web/chunks/VideoExternalUploadModal.abd1266a.js" : 23890 === e ? "web/chunks/e26c22fa.async.4766d8cd.js" : 14608 === e ? "web/chunks/bf0af950.async.a8d69aa0.js" : 36637 === e ? "web/chunks/ClipUploadModal.7e1349cb.js" : 18493 === e ? "web/chunks/AddClipToVideoBlock.e2897155.js" : 40953 === e ? "web/chunks/AddClipToVideoModal.82da787c.js" : 60274 === e ? "web/chunks/ClipPlayerModule.08afb145.js" : 75477 === e ? "chunks/" + e + ".a7148149.js" : 16848 === e ? "chunks/" + e + ".aaf35cf5.js" : 77955 === e ? "chunks/" + e + ".4bb806be.js" : 30420 === e ? "chunks/" + e + ".13241c2b.js" : 99364 === e ? "web/chunks/palette.212505ee.js" : 63616 === e ? "web/chunks/draggable.d59c2db3.js" : 17356 === e ? "web/chunks/videoplayer-interactive.149665b6.js" : e + ".js",
    __webpack_require__.miniCssF = e => ({
        6827: 1,
        18586: 1,
        98271: 1,
        74336: 1,
        17895: 1,
        50905: 1
    }[e] ? "web/chunks/7fd8420b.css" : 30685 === e ? "web/chunks/d5a750da.css" : 30072 === e ? "web/chunks/65e91a02.css" : 84835 === e ? "web/chunks/4f1d65d4.css" : 59886 === e ? "web/chunks/59bb9b9f.css" : 73214 === e ? "web/chunks/06964372.css" : 2166 === e ? "web/chunks/58fa3c10.css" : 21955 === e ? "web/chunks/5515adab.css" : 93001 === e ? "web/chunks/80721e3f.css" : 19959 === e ? "web/chunks/923fe311.css" : 8441 === e ? "web/chunks/cebf723a.css" : 1715 === e ? "web/chunks/9f51bfed.css" : 82915 === e ? "web/chunks/d79a1315.css" : 36502 === e ? "web/chunks/364fbf4a.css" : 61837 === e ? "web/chunks/chunks/39964121.css" : 11093 === e ? "web/chunks/be797b85.css" : 51943 === e ? "web/chunks/c50c0f1e.css" : 10504 === e ? "web/chunks/13a054c0.css" : 35577 === e ? "web/chunks/1517d3c4.css" : 17148 === e ? "web/chunks/09ef35c7.css" : 85386 === e ? "web/chunks/62c2c162.css" : 32643 === e ? "web/chunks/c637fa5f.css" : 6694 === e ? "web/chunks/b739642a.css" : 66434 === e ? "web/chunks/e8b64bd4.css" : 99595 === e ? "web/chunks/fe3440f9.css" : 7894 === e ? "web/chunks/4f77e6e1.css" : 43451 === e ? "web/chunks/8ae49606.css" : 23666 === e ? "web/chunks/ec8e260f.css" : 99370 === e ? "web/chunks/19fddb9e.css" : 95805 === e ? "web/chunks/f4631884.css" : 73509 === e ? "web/chunks/c9f40f81.css" : {
        91906: 1,
        74205: 1
    }[e] ? "web/chunks/a11e62a8.css" : 36637 === e ? "web/chunks/cf147d89.css" : 18493 === e ? "web/chunks/6278dd5c.css" : 40953 === e ? "web/chunks/b199d83c.css" : 60274 === e ? "web/chunks/ff3a19b0.css" : 99364 === e ? "web/chunks/palette.dc78f16e.css" : void 0),
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    o = {},
    __webpack_require__.l = (e, t, i, a, s) => {
        if (o[e])
            o[e].push(t);
        else {
            var n, r;
            if (void 0 !== i)
                for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                    var d = c[l];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == "vk:" + i) {
                        n = d;
                        break
                    }
                }
            n || (r = !0,
            (n = document.createElement("script")).charset = "utf-8",
            n.timeout = 120,
            __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc),
            n.setAttribute("data-webpack", "vk:" + i),
            s && n.setAttribute("fetchpriority", s),
            n.src = e),
            o[e] = [t];
            var u = (t, i) => {
                n.onerror = n.onload = null,
                clearTimeout(h);
                var a = o[e];
                if (delete o[e],
                n.parentNode && n.parentNode.removeChild(n),
                a && a.forEach((e => e(i))),
                t)
                    return t(i)
            }
              , h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = u.bind(null, n.onerror),
            n.onload = u.bind(null, n.onload),
            r && document.head.appendChild(n)
        }
    }
    ,
    __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.p = "/dist/",
    a = __webpack_require__.u,
    s = __webpack_require__.e,
    n = {},
    r = {},
    __webpack_require__.u = function(e) {
        return a(e) + (n.hasOwnProperty(e) ? "?" + n[e] : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return s(e).catch((function(t) {
            var i = r.hasOwnProperty(e) ? r[e] : 3;
            if (i < 1) {
                var o = a(e);
                throw t.message = "Loading chunk " + e + " failed after 3 retries.\n(" + o + ")",
                t.request = o,
                t
            }
            return new Promise((function(t) {
                var o, a = 3 - i + 1;
                setTimeout((function() {
                    var o = "cache-bust=true&retry-attempt=" + a;
                    n[e] = o,
                    r[e] = i - 1,
                    t(__webpack_require__.e(e))
                }
                ), (o = a,
                1e3 * Math.pow(3, o)))
            }
            ))
        }
        ))
    }
    ,
    c = e => new Promise(( (t, i) => {
        var o = __webpack_require__.miniCssF(e)
          , a = __webpack_require__.p + o;
        if (( (e, t) => {
            for (var i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
                var a = (n = i[o]).getAttribute("data-href") || n.getAttribute("href");
                if ("stylesheet" === n.rel && (a === e || a === t))
                    return n
            }
            var s = document.getElementsByTagName("style");
            for (o = 0; o < s.length; o++) {
                var n;
                if ((a = (n = s[o]).getAttribute("data-href")) === e || a === t)
                    return n
            }
        }
        )(o, a))
            return t();
        ( (e, t, i, o) => {
            var a = document.createElement("link");
            a.rel = "stylesheet",
            a.type = "text/css",
            a.onerror = a.onload = s => {
                if (a.onerror = a.onload = null,
                "load" === s.type)
                    i();
                else {
                    var n = s && ("load" === s.type ? "missing" : s.type)
                      , r = s && s.target && s.target.href || t
                      , c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED",
                    c.type = n,
                    c.request = r,
                    a.parentNode.removeChild(a),
                    o(c)
                }
            }
            ,
            a.href = t,
            document.head.appendChild(a)
        }
        )(e, a, t, i)
    }
    )),
    l = {
        84012: 0
    },
    __webpack_require__.f.miniCss = (e, t) => {
        l[e] ? t.push(l[e]) : 0 !== l[e] && {
            1715: 1,
            2166: 1,
            6694: 1,
            6827: 1,
            7894: 1,
            8441: 1,
            10504: 1,
            11093: 1,
            17148: 1,
            17895: 1,
            18493: 1,
            18586: 1,
            19959: 1,
            21955: 1,
            23666: 1,
            30072: 1,
            30685: 1,
            32643: 1,
            35577: 1,
            36502: 1,
            36637: 1,
            40953: 1,
            43451: 1,
            50905: 1,
            51943: 1,
            59886: 1,
            60274: 1,
            61837: 1,
            66434: 1,
            73214: 1,
            73509: 1,
            74205: 1,
            74336: 1,
            82915: 1,
            84835: 1,
            85386: 1,
            91906: 1,
            93001: 1,
            95805: 1,
            98271: 1,
            99364: 1,
            99370: 1,
            99595: 1
        }[e] && t.push(l[e] = c(e).then(( () => {
            l[e] = 0
        }
        ), (t => {
            throw delete l[e],
            t
        }
        )))
    }
    ,
    ( () => {
        __webpack_require__.b = document.baseURI || self.location.href;
        var e = {
            84012: 0
        };
        __webpack_require__.f.j = (t, i, o) => {
            var a = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    i.push(a[2]);
                else if (/^(1(7((1|67|89)5|148|356|566)|9(072|129|959)|(109|202|849)3|0425|0504|1100|2334|4608|4760|8586)|2(1(529|66|81|955)|3(5|592|666|890)|6(262|488|651)|9(311|360|549|862)|4639|4950|5153|5305|7107|8166)|3(1(095|427|563)|4(042|190|861)|(007|650|832)2|0685|2535|2643|3641|5577|6637|9861)|4(0(676|865|953)|2(255|734|943)|(316|75|922)2|(345|676|804)1|5458)|5(0(371|560|777|905)|1(00|713|943)|39(27|58)|4(252|833|932)|6(091|24|329|965)|2007|5035|9886)|6(6(372|434|94)|(08|361|909)6|0274|1837|3319|4001|827|8425)|7(4(205|336|633)|9(210|398|934)|(04|59)08|(239|321|694|89)4|1980|62|7472)|8(4(012|41|577|835)|5(128|172|386)|1062|1606|2915|7690|8651|9631)|9(1(498|772|906)|3(001|20|859)|5(805|903|991)|6(35|557|853)|8(271|462|908)|9(25|364|370|473|595)|4322|4799))$/.test(t)) {
                    var s = new Promise(( (i, o) => a = e[t] = [i, o]));
                    i.push(a[2] = s);
                    var n = __webpack_require__.p + __webpack_require__.u(t)
                      , r = new Error;
                    __webpack_require__.l(n, (i => {
                        if (__webpack_require__.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var o = i && ("load" === i.type ? "missing" : i.type)
                              , s = i && i.target && i.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")",
                            r.name = "ChunkLoadError",
                            r.type = o,
                            r.request = s,
                            a[1](r)
                        }
                    }
                    ), "chunk-" + t, t, o)
                } else
                    e[t] = 0
        }
        ,
        __webpack_require__.O.j = t => 0 === e[t];
        var t = (t, i) => {
            var o, a, [s,n,r] = i, c = 0;
            if (s.some((t => 0 !== e[t]))) {
                for (o in n)
                    __webpack_require__.o(n, o) && (__webpack_require__.m[o] = n[o]);
                if (r)
                    var l = r(__webpack_require__)
            }
            for (t && t(i); c < s.length; c++)
                a = s[c],
                __webpack_require__.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return __webpack_require__.O(l)
        }
          , i = self.webpackChunkvkweb = self.webpackChunkvkweb || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )(),
    ( () => {
        var e = {}
          , t = {
            podcasts_web: "f6b6684b570e36cd",
            bookmarkClipPost: "f980fda40f715b2d",
            audio_config_legacy: "3aa7a6807ea6e05a",
            audio_config_overrides: "104a6a3be9b93619",
            audio_web_globalPlayerImpl: "2a44e4f812f0c727",
            showCaptchaPopup: "e86b83afe8d0a9fc",
            wikiModalExampleInitiator: "be30e82edc1853fe",
            stories_web_lib: "4a7e182ffff10326",
            video_web_lib: "674e406e4d29d245",
            show_audio_playlist: "f82ed99bd7dd14b4",
            money_transfer_box: "d4bba56b472054a1",
            money_transfer: "1107d134e8cac5d4",
            unauth_action_box: "2b824a19ca64c172",
            StoryPublisherV2: "3e84dbd0d55082ca",
            SilentModeForms: "c62172e8ae356a01",
            showDonutSubscriptionModal: "d53475803adb5639",
            "feed-client-nav-skeleton": "3fbb5569bfc06006",
            "feed-client-nav-async-right-block": "3fbb5569bfc06006",
            pageDocs: "5da870b1377bc8ca",
            pageFriends: "c61a2f5d1cb03bd2",
            pageMarketCatalog: "935ff61602aff177",
            PhotosVKCOMApp: "9d1b3b5379f4edc6",
            AudioLongtapModal: "5f832e7e10dfd391",
            audio_modals_MusicTrackList: "6391c6885159c7d6",
            voice_message_player: "ec13f21bcd563119",
            speech: "ced1158c62668239",
            MiniAppService_MiniApp: "4ec7ab500e733724",
            menu_settings: "66c3e81b15bcf6bc",
            ReportsProfileModal: "b00f6b434176d25e",
            ReportForm: "6e4441cec6a06822",
            VideoUpload: "53aadf2e97d1e2f6",
            MarketItemsCarousel: "bedbf533006cb04e",
            "vkcom-kit-qr-code-base": "be30e82edc1853fe",
            NewStickerPicker: "d698bd05efe4d083",
            CommunityPage_SimilarGroups: "bcc2548c3f138f9f",
            CommunityPage_DonutBanner: "67a900d1e6df1c69",
            CommunityPage_GoalsOnboarding: "be30e82edc1853fe",
            CommunityPage_LevelsAdminOnboarding: "1dfa647cdd2fea43",
            donut_modals: "d778cc253b59d70b",
            "framer-motion-entrypoint": "be30e82edc1853fe",
            VideoEditorModal: "6531d269aafe48a9",
            story_blocks: "ddfd30e049407dd5",
            "StickersKit-UGCManagementRestrictedModal": "be30e82edc1853fe",
            "StickersKit-AgeRestrictionModal": "be30e82edc1853fe",
            "StickersKit-ChatRestrictionModal": "be30e82edc1853fe",
            fastchat_reforged_v150: "1d1a3615d60e7f59",
            PodcastEpisodeModal: "4a8e4e14e18c895c",
            PublishClipToVideoModal: "fd7f38b760e09d53",
            sharedVideoUploadState: "4de1cf1ae5d062e5",
            VideoUploadModal: "65c87e7f400c48ad",
            VideoExternalUploadModal: "65c87e7f400c48ad",
            ClipUploadModal: "cb914f47ad3d4b96",
            AddClipToVideoBlock: "3db135e76479446f",
            AddClipToVideoModal: "c5f760b8814e4759",
            StoriesCreatorVKApp: "755357e53cfb4735"
        };
        __webpack_require__.f.vkLangs = (i, o) => {
            if ("string" == typeof i && i.startsWith("langs/web/")) {
                var a = t[i.replace("langs/web/", "")];
                if (a) {
                    var s = __webpack_require__.o(e, i) ? e[i] : void 0;
                    if (0 !== s)
                        if (s)
                            o.push(s[2]);
                        else {
                            var n = new Promise(( (t, o) => s = e[i] = [t, o]));
                            o.push(s[2] = n);
                            var r = "?v=" + (window.vk && window.vk.cfg ? window.vk.cfg.langs_force_version : 0) + "&p=web" || ""
                              , c = self.location.origin + /js/ + i + "." + a + ".js" + r
                              , l = new Error;
                            __webpack_require__.l(c, (t => {
                                if (__webpack_require__.o(e, i) && (0 !== (s = e[i]) && (e[i] = void 0),
                                s)) {
                                    s[0]();
                                    var o = t && ("load" === t.type ? "missing" : t.type)
                                      , a = t && t.target && t.target.src;
                                    l.message = "Loading lang " + i + " failed.\n(" + o + ": " + a + ")",
                                    l.name = "LangLoadError",
                                    l.type = o,
                                    l.request = a,
                                    setTimeout(( () => {
                                        throw l
                                    }
                                    ), 0)
                                }
                            }
                            ), "lang-" + i)
                        }
                }
            }
        }
        ;
        var i = self.langChunkLoadingGlobal || (e => self.addLangKeys(e[1]));
        self.langChunkLoadingGlobal = ( (t, i) => {
            var [o] = i;
            t && t(i),
            __webpack_require__.o(e, o) && e[o] && e[o][0](),
            e[o] = 0
        }
        ).bind(null, i)
    }
    )();
    var h = __webpack_require__.O(void 0, [91498, 89631, 50560, 85172, 762, 21529, 79210, 23592, 12023, 39861, 53958, 95903], ( () => __webpack_require__(397059)));
    h = __webpack_require__.O(h)
}
)();

console.log(r);