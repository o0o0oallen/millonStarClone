! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.minigame = {})
}(this, function (e) {
	"use strict";

	function n(e, o, a, d) {
		return new (a = a || Promise)(function (i, t) {
			function s(e) {
				try {
					r(d.next(e))
				} catch (e) {
					t(e)
				}
			}

			function n(e) {
				try {
					r(d.throw(e))
				} catch (e) {
					t(e)
				}
			}

			function r(e) {
				var t;
				e.done ? i(e.value) : ((t = e.value) instanceof a ? t : new a(function (e) {
					e(t)
				})).then(s, n)
			}
			r((d = d.apply(e, o || [])).next())
		})
	}
	var t = {
		OK: "OK",
		UNSUPPORTED_API: "UNSUPPORTED_API",
		TIMEOUT: "TIMEOUT",
		INVALID_PARAM: "INVALID_PARAM",
		NOT_READY: "NOT_READY",
		ADS_NO_FILL: "ADS_NO_FILL",
		AD_LOAD_FAILED: "AD_LOAD_FAILED",
		AD_DISMISSED: "AD_DISMISSED",
		AD_NOT_LOADED: "AD_NOT_LOADED",
		AD_ALREADY_LOADED: "AD_ALREADY_LOADED",
		AD_ALREADY_SHOWED: "AD_ALREADY_SHOWED"
	};
	const i = {
		CODE: t,
		OK: {
			code: t.OK,
			message: "Success"
		},
		TIMEOUT: {
			code: t.TIMEOUT,
			message: "timeout"
		},
		adLoadFail: {
			code: t.AD_LOAD_FAILED,
			message: "Ad load failed"
		},
		adDismissed: {
			code: t.AD_DISMISSED,
			message: "Ad dismissed"
		},
		adNotLoaded: {
			code: t.AD_NOT_LOADED,
			message: "Ad not loaded"
		},
		adAlreadyLoaded: {
			code: t.AD_ALREADY_LOADED,
			message: "Ad already loaded"
		},
		adAlreadyShowed: {
			code: t.AD_ALREADY_SHOWED,
			message: "Ad already showed"
		}
	};
	var r, o;

	function s(i, s) {
		return n(this, void 0, void 0, function* () {
			return new Promise((e, t) => {
				setTimeout(() => {
					try {
						s && s(), e()
					} catch (e) {
						t(e)
					}
				}, 1e3 * i)
			})
		})
	} (P = r = r || {})[P.INTERSTITIAL = 0] = "INTERSTITIAL", P[P.REWARDED_VIDEO = 1] = "REWARDED_VIDEO", P[P.BANNER = 2] = "BANNER", (t = o = o || {})[t.NONE = 0] = "NONE", t[t.NEW = 1] = "NEW", t[t.LOADING = 2] = "LOADING", t[t.LOADED = 3] = "LOADED", t[t.PLAYING = 4] = "PLAYING";
	const a = {
		code: "AD_INSTANCE_STILL_CREATING",
		message: "AdInstance is on creating."
	},
		d = {
			code: "EXCEED_MAX_AD_INSTANCE",
			message: "Max AD Instance allowed: 3"
		},
		l = {
			code: "NO_READY_AD_INSTANCE",
			message: "AD Instance Not Ready or Played too frequently"
		},
		h = {
			code: "NOT_READY_FOR_LOAD",
			message: "Not Ready for Load"
		},
		c = {
			code: "AD_IS_LOADING",
			message: "AD is Loading"
		},
		_ = {
			code: "NOT_READY_FOR_PLAYING",
			message: "Not Ready for Playing"
		},
		f = {
			code: "AD_IS_PLAYING",
			message: "AD is Playing"
		},
		A = {
			code: "NO_BANNER_AD",
			message: "No Banner Ad Instance"
		},
		u = {
			code: "API_NOT_SUPPORT",
			message: "API Not Support"
		},
		m = {
			code: "TOO_FAST_SHOW",
			message: "Too Fast To Show Ads"
		},
		I = {
			code: "NOT_PLAYING",
			message: "Ads Not Playing"
		},
		g = {
			code: "TOO_MANY_ERRORS",
			message: "Too Many Errors, Stop Next Action"
		},
		y = "RATE_LIMITED",
		E = "ADS_NO_FILL";

	function w(e, t, i) {
		return e && void 0 !== e[t] ? e[t] : i
	}
	class T {
		constructor(e, t) {
			this._lastShowTime = 0, this._refreshInterval = 0, this._refreshInterval = 0 < e ? e : 0, (this._lastShowTime = 0) < t && (this._lastShowTime = Date.now() + 1e3 * t - 1e3 * this._refreshInterval)
		}
		isReadyToRefresh() {
			return this.getNextRefreshInterval() <= 0
		}
		getNextRefreshInterval() {
			let e = 0;
			var t;
			return 0 < this._refreshInterval && 0 < this._lastShowTime && (t = Date.now(), e = this._refreshInterval - (t - this._lastShowTime) / 1e3), e
		}
		updateLastShowTime() {
			this._lastShowTime = Date.now()
		}
	}
	class D {
		constructor(e, t, i, s) {
			this._maxLoadError = 0, this._errorCounter = 0, this._fatalError = !1, this._sharedTimer = null, this._adId = e, this._state = o.NONE, this._type = t, this._sharedTimer = i, this._fatalError = !1, console.assert(!!i, "sharedTimer is invalid", i), this._maxLoadError = w(s, "maxLoadError", 0)
		}
		getStateName() {
			return function (e) {
				let t = "NONE";
				switch (e) {
					case o.NEW:
						t = "NEW";
						break;
					case o.LOADING:
						t = "LOADING";
						break;
					case o.LOADED:
						t = "LOADED";
						break;
					case o.PLAYING:
						t = "PLAYING"
				}
				return t
			}(this._state)
		}
		getAdTypeName() {
			return this._type === r.INTERSTITIAL ? "Interstitial" : this._type === r.REWARDED_VIDEO ? "RewardedVideo" : this._type === r.BANNER ? "Banner" : "UNKNOWN"
		}
		getInfo() {
			return `[${this.getAdTypeName()}:${this._adId}:${this.getStateName()}]`
		}
		isReadyToRefresh() {
			return this._sharedTimer.isReadyToRefresh()
		}
		getNextRefreshInterval() {
			return this._sharedTimer.getNextRefreshInterval()
		}
		updateLastShowTime() {
			this._sharedTimer.updateLastShowTime()
		}
		increaseErrorCounter() {
			this._errorCounter++
		}
		resetErrorCounter() {
			this._errorCounter = 0
		}
		setFatalError() {
			this._fatalError = !0
		}
		isErrorTooMany() {
			return this._fatalError || 0 < this._maxLoadError && this._errorCounter >= this._maxLoadError
		}
	}
	class O extends D {
		constructor(e, t, i, s) {
			super(e, t, i, s), this._adInstance = null, this._autoLoadOnPlay = w(s, "autoLoadOnPlay", !1)
		}
		loadAsync() {
			return n(this, void 0, void 0, function* () {
				if (null === this._adInstance) {
					if (this._state !== o.NONE) throw console.log("Ad Instance is still creating: " + this.getInfo()), a;
					this._state = o.NEW, console.log("Get Ad Instance: " + this.getInfo()), this._adInstance = yield this.createAdInstanceAsync(this._adId)
				}
				if (this._state !== o.NEW) throw console.log("Not ready for preload: " + this.getInfo()), this._state === o.LOADING ? (console.log("Ad is loading, do not reload" + this.getInfo()), c) : h;
				if (this.isErrorTooMany()) throw console.log("Too many errors, stop loading: " + this.getInfo()), g;
				try {
					return this._state = o.LOADING, console.log("Start Loading: " + this.getInfo()), yield this._adInstance.loadAsync(), this._state = o.LOADED, this.resetErrorCounter(), console.log("Loading Success: " + this.getInfo()), !0
				} catch (e) {
					var t;
					throw console.info("Loading Failed: " + this.getInfo(), e), e.code === E ? (console.info("Ads Not Fill, stop loading: " + this.getInfo()), this.setFatalError()) : (this.increaseErrorCounter(), this._state = o.NEW, t = 10 * this._errorCounter + 1, console.log("Reload after " + t + " seconds: " + this.getInfo()), this.safeReLoadAsync(t)), e
				}
			})
		}
		isReady() {
			return null !== this._adInstance && this._state === o.LOADED
		}
		safeReLoadAsync(e = 1) {
			return n(this, void 0, void 0, function* () {
				s(e, () => n(this, void 0, void 0, function* () {
					try {
						yield this.loadAsync()
					} catch (e) {
						console.info("Reload Error: ", e)
					}
				})).catch(e => {
					console.info("Reload failed: " + this.getInfo(), e)
				})
			})
		}
		showAsync() {
			return n(this, void 0, void 0, function* () {
				if (!this.isReady()) throw console.log("Not Ready for play: " + this.getInfo()), this._state === o.PLAYING ? f : _;
				if (!this.isReadyToRefresh()) throw console.log("Play too frequently, wait for " + this.getNextRefreshInterval() + " seconds: " + this.getInfo()), m;
				try {
					return this._state = o.PLAYING, console.log("Play Ads: " + this.getInfo()), yield this._adInstance.showAsync(), console.log("Play Success: " + this.getInfo()), this._adInstance = null, this._state = o.NONE, this.updateLastShowTime(), this._autoLoadOnPlay && (console.log("Reload after 1 seconds: " + this.getInfo()), this.safeReLoadAsync(1)), !0
				} catch (e) {
					throw console.log("Play Failed: " + this.getInfo(), e), e.code === y ? this._state = o.LOADED : (this._adInstance = null, this._state = o.NONE, this._autoLoadOnPlay && (console.log("Reload after 1 seconds: " + this.getInfo()), this.safeReLoadAsync(1))), e
				}
			})
		}
	}
	class N extends O {
		constructor(e, t, i) {
			super(e, r.INTERSTITIAL, t, i)
		}
		createAdInstanceAsync(e) {
			return n(this, void 0, void 0, function* () {
				return yield FBInstant.getInterstitialAdAsync(this._adId)
			})
		}
	}
	class R extends O {
		constructor(e, t, i) {
			super(e, r.REWARDED_VIDEO, t, i)
		}
		createAdInstanceAsync(e) {
			return n(this, void 0, void 0, function* () {
				return yield FBInstant.getRewardedVideoAsync(this._adId)
			})
		}
	}
	class L extends D {
		constructor(e, t, i) {
			super(e, r.BANNER, t, i)
		}
		showAsync() {
			return n(this, void 0, void 0, function* () {
				if (!this.isReadyToRefresh()) throw console.log("Play too frequently, wait for " + this.getNextRefreshInterval() + " seconds: " + this.getInfo()), m;
				if (this.isErrorTooMany()) throw console.log("Too many errors, stop: " + this.getInfo()), g;
				if (this._state === o.LOADING) throw console.info("Banner is loading, wait for it: " + this.getInfo()), c;
				try {
					this._state = o.LOADING, console.log("Show Banner: " + this.getInfo()), yield FBInstant.loadBannerAdAsync(this._adId), this._state = o.PLAYING, console.log("Show Banner Success: " + this.getInfo()), this.updateLastShowTime(), this.resetErrorCounter()
				} catch (e) {
					throw console.info("Show Banner Failed: " + this.getInfo(), e), e.code === y ? this._state = o.NONE : e.code === E ? (console.info("Ads Not Fill, Stop: " + this.getInfo()), this.setFatalError()) : (this.increaseErrorCounter(), this._state = o.NONE), e
				}
			})
		}
		hideAsync() {
			return n(this, void 0, void 0, function* () {
				if (this._state !== o.PLAYING) throw console.log("No Banner Playing: " + this.getInfo()), I;
				try {
					console.log("Hide Banner: " + this.getInfo()), yield FBInstant.hideBannerAdAsync(), this._state = o.NONE
				} catch (e) {
					throw console.info("Hide Banner Failed: " + this.getInfo(), e), e
				}
			})
		}
	}
	class v {
		static getVersion() {
			return "1.0.4"
		}
		static initAdOption(e) {
			try {
				this._fb_max_ad_instance = e.fb_max_ad_instance, this._fb_init_ad_count = e.fb_init_ad_count, this.defaultInterstitialOption = {
					autoLoadOnPlay: e.fb_auto_load_on_play,
					maxLoadError: e.fb_max_interstitial_error
				}, this.defaultRewardedVideoOption = {
					autoLoadOnPlay: e.fb_auto_load_on_play,
					maxLoadError: e.fb_max_rewarded_video_error
				}, this.defaultBannerOption = {
					autoLoadOnPlay: e.fb_auto_load_on_play,
					maxLoadError: e.fb_max_banner_error
				}, this.defaultInterstitialTimerOption = {
					refreshInterval: e.fb_interstitial_refresh_interval,
					delayForFirstAd: e.fb_ad_delay_for_first_interstitial
				}, this.defaultRewardedVideoTimerOption = {
					refreshInterval: e.fb_rewarded_video_refresh_interval,
					delayForFirstAd: e.fb_ad_delay_for_first_rewarded_video
				}, this.defaultBannerTimerOption = {
					refreshInterval: e.fb_banner_refresh_interval,
					delayForFirstAd: e.fb_ad_delay_for_first_banner
				}, console.log("FBAdManager initAdOption success")
			} catch (e) {
				console.info("FBAdManager initAdOption error", e)
			}
		}
		static addInterstitial(t, i = this._fb_init_ad_count) {
			null == this._interstitialTimer && (this._interstitialTimer = new T(this.defaultInterstitialTimerOption.refreshInterval, this.defaultInterstitialTimerOption.delayForFirstAd));
			for (let e = 0; e < i; e++) {
				if (this._interstitialAds.length >= this._fb_max_ad_instance) throw console.log("Fail to add interstitial, too many instances: " + this._interstitialAds.length, t), d;
				var s = new N(t, this._interstitialTimer, this.defaultInterstitialOption);
				this._interstitialAds.push(s), console.log("Add Interstitial: " + t, "count: " + this._interstitialAds.length)
			}
			return this._interstitialAds.length
		}
		static addRewardedVideo(t, i = this._fb_init_ad_count) {
			null === this._rewardedVideoTimer && (this._rewardedVideoTimer = new T(this.defaultRewardedVideoTimerOption.refreshInterval, this.defaultRewardedVideoTimerOption.delayForFirstAd));
			for (let e = 0; e < i; e++) {
				if (this._rewardedVideos.length >= this._fb_max_ad_instance) throw console.log("Fail to add RewardedVideo, too many instances: " + this._rewardedVideos.length, t), d;
				var s = new R(t, this._rewardedVideoTimer, this.defaultRewardedVideoOption);
				this._rewardedVideos.push(s), console.log("Add RewardedVideo: " + t, "count: " + this._rewardedVideos.length)
			}
			return this._rewardedVideos.length
		}
		static addBanner(e) {
			null == this._bannerTimer && (this._bannerTimer = new T(this.defaultBannerTimerOption.refreshInterval, this.defaultBannerTimerOption.delayForFirstAd));
			var t = new L(e, this._bannerTimer, this.defaultBannerOption);
			return this._banners.push(t), console.log("Add Banner: " + e, "count: " + this._banners.length), t
		}
		static loadAll() {
			return n(this, void 0, void 0, function* () {
				return yield this.loadAllAsync()
			})
		}
		static loadAllAsync() {
			return n(this, void 0, void 0, function* () {
				console.log("FBAdManager Version: " + this.getVersion()), console.log("Init Ads Queue");
				for (let e = 0; e < this._rewardedVideos.length; e++) {
					const t = this._rewardedVideos[e];
					0 < e && (yield s(.1));
					try {
						yield t.loadAsync()
					} catch (e) { }
				}
				for (let e = 0; e < this._interstitialAds.length; e++) {
					const i = this._interstitialAds[e];
					0 < e && (yield s(.1));
					try {
						yield i.loadAsync()
					} catch (e) { }
				}
			})
		}
		static _isAdReady(e) {
			var t = e === r.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos;
			let i = !1;
			for (let e = 0; e < t.length; e++) {
				const s = t[e];
				if (s.isReady() && s.isReadyToRefresh()) {
					i = !0;
					break
				}
			}
			return i
		}
		static _showAsync(e) {
			var t = e === r.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos;
			let i = null;
			for (let e = 0; e < t.length; e++) {
				const s = t[e];
				if (s.isReady() && s.isReadyToRefresh()) {
					i = s;
					break
				}
			}
			if (null != i) return i.showAsync();
			throw l
		}
		static _getAdTimer(e) {
			return e === r.INTERSTITIAL ? this._interstitialTimer : e === r.REWARDED_VIDEO ? this._rewardedVideoTimer : this._bannerTimer
		}
		static isInterstitialAdReady() {
			return this._isAdReady(r.INTERSTITIAL)
		}
		static showInterstitialAd() {
			return n(this, void 0, void 0, function* () {
				return yield this._showAsync(r.INTERSTITIAL)
			})
		}
		static isRewardedVideoReady() {
			return this._isAdReady(r.REWARDED_VIDEO)
		}
		static showRewardedVideo() {
			return n(this, void 0, void 0, function* () {
				return yield this._showAsync(r.REWARDED_VIDEO)
			})
		}
		static checkApiSupport(e) {
			return 0 <= FBInstant.getSupportedAPIs().indexOf(e)
		}
		static isBannerSupport() {
			return void 0 === this._bannerSupport && (this._bannerSupport = this.checkApiSupport("loadBannerAdAsync")), this._bannerSupport
		}
		static isBannerReady() {
			if (this._banners.length <= 0) throw A;
			const e = this._banners[0];
			return e.isReadyToRefresh()
		}
		static showBannerAsync() {
			return n(this, void 0, void 0, function* () {
				if (!this.isBannerSupport()) throw u;
				if (this._banners.length <= 0) throw A;
				const e = this._banners[0];
				return yield e.showAsync()
			})
		}
		static hideBannerAsync() {
			return n(this, void 0, void 0, function* () {
				if (!this.isBannerSupport()) throw u;
				if (this._banners.length <= 0) throw A;
				const e = this._banners[0];
				return yield e.hideAsync()
			})
		}
	}
	v._interstitialAds = [], v._rewardedVideos = [], v._banners = [], v._interstitialTimer = null, v._rewardedVideoTimer = null, v._bannerTimer = null, v._bannerSupport = void 0, v._fb_max_ad_instance = 1, v._fb_init_ad_count = 1, v.defaultInterstitialOption = {
		autoLoadOnPlay: !0,
		maxLoadError: 3
	}, v.defaultRewardedVideoOption = {
		autoLoadOnPlay: !0,
		maxLoadError: 3
	}, v.defaultBannerOption = {
		autoLoadOnPlay: !0,
		maxLoadError: 1
	}, v.defaultInterstitialTimerOption = {
		refreshInterval: 40,
		delayForFirstAd: 30
	}, v.defaultRewardedVideoTimerOption = {
		refreshInterval: 0,
		delayForFirstAd: 0
	}, v.defaultBannerTimerOption = {
		refreshInterval: 40,
		delayForFirstAd: 0
	};
	const p = class V {
		constructor() {
			this._test = !1, this._enabled = !1
		}
		static get instance() {
			return this._instance || (this._instance = new V), this._instance
		}
		get isTest() {
			return this._test
		}
		get enabed() {
			return this._enabled
		}
		load(e) {
			try {
				var t = e.options;
				this._test = e.isTest, this._enabled = e.enabled, v.initAdOption(t);
				var i = e.config;
				v.addBanner(i.banner), v.addInterstitial(i.interstitial), v.addRewardedVideo(i.rewarded_video), v.loadAllAsync()
			} catch (e) {
				console.log("load ads options error: ", e)
			}
		}
		showInterstitial() {
			return v.showInterstitialAd().then(() => Promise.resolve()).catch(e => Promise.reject(e))
		}
		showRewardedVideo() {
			return v.showRewardedVideo().then(() => Promise.resolve()).catch(e => Promise.reject(e))
		}
		showBanner() {
			return v.showBannerAsync().then(() => Promise.resolve()).catch(e => Promise.reject(e))
		}
		hideBanner() {
			return v.hideBannerAsync().then(() => Promise.resolve()).catch(e => Promise.reject(e))
		}
		isRewardvideoReady() {
			return v.isRewardedVideoReady()
		}
		isInterstitialReady() {
			return v.isInterstitialAdReady()
		}
		isBannerReady() {
			return v.isBannerReady()
		}
	}.instance;
	let b = document;
	var P = {
		LOCAL: "local",
		MINIGAME: "minigame",
		FBIG: "fbig"
	};

	function S(i) {
		return n(this, void 0, void 0, function* () {
			let t = B;
			try {
				const e = yield fetch(i);
				return 404 === e.status ? Promise.reject({
					message: `${i} not found`
				}) : (t = yield e.json(), console.info("config loaded:", t), Promise.resolve(t))
			} catch (e) {
				return console.info("use default config: ", t), Promise.reject({
					message: "load config failed: " + e
				})
			}
		})
	}

	function F(i) {
		return n(this, void 0, void 0, function* () {
			try {
				if (window.minigamePlatform = i.platform, window.minigameConfig = i.features, i && i.sdk) {
					yield function (r, o = !1, a) {
						return n(this, void 0, void 0, function* () {
							return new Promise((e, t) => {
								const i = b.createElement("script");
								if (i.src = r, i.async = o, a)
									for (const n in a) i.setAttribute(n, a[n]);
								const s = () => {
									i.removeEventListener("load", s), e()
								};
								i.addEventListener("load", s), i.addEventListener("error", e => {
									console.error(e), t(new Error(`Failed to load ${r}`))
								}), (b.getElementsByTagName("head")[0] || document.documentElement).appendChild(i)
							})
						})
					}(i.sdk);
					var e = i.instance || B.instance;
					const t = window[e];
					return t && t.initializeAsync ? (window.minigameLoader = t, window.minigame = t, t.initializeAsync()) : Promise.reject({
						message: "sdk instance not found: " + e
					})
				}
				return Promise.reject({
					message: "sdk url is not defined: " + i
				})
			} catch (e) {
				return Promise.reject({
					message: "load platform failed: " + e
				})
			}
		})
	}
	const B = {
		platform: P.LOCAL,
		sdk: "minigame-sdk.js",
		instance: "FBInstant",
		features: {
			ads: {
				enabled: !0,
				isTest: !0,
				config: {
					banner: "4864743603539728_5082905605056859",
					interstitial: "4864743603539728_5070034729677280",
					rewarded_video: "4864743603539728_5070034119677341",
					rewarded_interstitial: "4864743603539728_5070034119677341"
				},
				options: {
					fb_max_ad_instance: 3,
					fb_init_ad_count: 3,
					fb_banner_refresh_interval: 0,
					fb_interstitial_refresh_interval: 0,
					fb_rewarded_video_refresh_interval: 0,
					fb_max_banner_error: 1,
					fb_max_interstitial_error: 3,
					fb_max_rewarded_video_error: 3,
					fb_auto_load_on_play: !0,
					fb_auto_reload_delay: 1,
					fb_ad_delay_for_first_banner: 0,
					fb_ad_delay_for_first_interstitial: 0,
					fb_ad_delay_for_first_rewarded_video: 0
				}
			},
			leaderboard: {
				enabled: !1
			}
		}
	};
	t = {
		version: "1.0.1",
		inited: !1,
		initializeAsync: function (i) {
			return n(this, void 0, void 0, function* () {
				if (this.inited) return console.warn("minigame sdk already inited"), Promise.reject({
					message: "minigame sdk already inited"
				});
				this.inited = !0, console.info("minigame loader started...");
				var e = i || "minigame.json";
				let t;
				try {
					t = yield S(e)
				} catch (e) {
					return Promise.reject({
						message: "minigame sdk load config failed: " + e.message
					})
				}
				try {
					yield F(t)
				} catch (e) {
					return Promise.reject({
						message: "minigame sdk init failed: " + e.message
					})
				}
				return console.info("minigame loader inited..."), t.features && t.features.ads ? (p.load(t.features.ads), window.MiniGameAds = p, Promise.resolve()) : (console.info("missing features or missing ads"), Promise.reject({
					message: "missing features or missing ads"
				}))
			})
		},
		setLoadingProgress: function (e) {
			throw {
				code: i.CODE.NOT_READY,
				message: "minigameLoader.setLoadingProgress not injected"
			}
		},
		startGameAsync: function () {
			throw {
				code: i.CODE.NOT_READY,
				message: "minigameLoader.startGameAsync not injected"
			}
		}
	};
	console.info("minigame sdk: " + t.version), window.FBInstant = t, window.minigame = t, e.MINIGAME_PLATFORM = P, e.MINIGAME_DEFAULT_CONFIG = B, e.loadConfigAsync = S, e.loadPlatformAndInitAsync = F, e.minigameLoader = t, Object.defineProperty(e, "__esModule", {
		value: !0
	})
});