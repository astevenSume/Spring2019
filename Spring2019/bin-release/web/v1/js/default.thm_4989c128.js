window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MainScene":"resource/skins/MainScene.exml","PlayingScene":"resource/skins/PlayingScene.exml","RuleScene":"resource/skins/RuleScene.exml","StoreScene":"resource/skins/StoreScene.exml","RankScene":"resource/skins/RankScene.exml","RecordScene":"resource/skins/RecordScene.exml","PlayScene":"resource/skins/PlayScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/btn_close.exml'] = window.btn_close = (function (_super) {
	__extends(btn_close, _super);
	function btn_close() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 33.3;
		this.width = 33.3;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","height",33.3)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = btn_close.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.left = 0;
		t.source = "icon_close_png";
		t.top = 0;
		t.percentWidth = 90;
		return t;
	};
	return btn_close;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/btn_return.exml'] = window.btn_return = (function (_super) {
	__extends(btn_return, _super);
	function btn_return() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 33.3;
		this.width = 33.3;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = btn_return.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 90;
		t.left = 0;
		t.source = "icon_back60_png";
		t.top = 0;
		t.percentWidth = 90;
		return t;
	};
	return btn_return;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/golden_coin.exml'] = window.golden_coin = (function (_super) {
	__extends(golden_coin, _super);
	function golden_coin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 26;
		this.width = 26;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = golden_coin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 26;
		t.left = 0;
		t.source = "icon_gold52_png";
		t.top = 0;
		t.width = 26;
		return t;
	};
	return golden_coin;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/goods_item.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	var goods_item$Skin1 = 	(function (_super) {
		__extends(goods_item$Skin1, _super);
		function goods_item$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_buy_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goods_item$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_buy_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goods_item$Skin1;
	})(eui.Skin);

	function goods_item() {
		_super.call(this);
		this.skinParts = ["sbtn_buy"];
		
		this.height = 240;
		this.width = 175;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this.sbtn_buy_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image1"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.image2"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.label1"],[0],this.sbtn_buy,"name");
	}
	var _proto = goods_item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 180;
		t.left = 0;
		t.source = "dj_bg_png";
		t.top = 0;
		t.width = 175;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 20;
		t.width = 78;
		t.x = 48;
		t.y = 39;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 72;
		t.horizontalCenter = 0.5;
		t.width = 72;
		t.y = 71;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 14;
		t.source = "X1_png";
		t.width = 20;
		t.x = 118;
		t.y = 118;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 13;
		t.text = "RMB";
		t.textColor = 0x234580;
		t.x = 54;
		t.y = 148;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "￥10";
		t.textColor = 0x234580;
		t.x = 85;
		t.y = 143;
		return t;
	};
	_proto.sbtn_buy_i = function () {
		var t = new eui.Button();
		this.sbtn_buy = t;
		t.height = 49.5;
		t.horizontalCenter = 0;
		t.width = 119;
		t.y = 184;
		t.skinName = goods_item$Skin1;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/records_item.exml'] = window.records_item = (function (_super) {
	__extends(records_item, _super);
	function records_item() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 74;
		this.width = 329;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Button1_i(),this._Label3_i()];
	}
	var _proto = records_item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.source = "bg_list_w_png";
		t.width = 800;
		t.x = -198;
		t.y = -67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "NO1_png";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15;
		t.text = "冬日的暖阳";
		t.textColor = 0x333333;
		t.x = 106;
		t.y = 23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 11;
		t.text = "02-04  14-22";
		t.textColor = 0x666666;
		t.x = 106;
		t.y = 41;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 26;
		t.label = "";
		t.skinName = "golden_coin";
		t.verticalCenter = 0;
		t.width = 26;
		t.x = 223;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15;
		t.text = "+1354万";
		t.textColor = 0xe1b40e;
		t.x = 249;
		t.y = 28;
		return t;
	};
	return records_item;
})(eui.Skin);generateEUI.paths['resource/skins/item-skins/scores.exml'] = window.scores = (function (_super) {
	__extends(scores, _super);
	function scores() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 48;
		this.width = 320;
		this.elementsContent = [this._Rect1_i(),this._Button1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = scores.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 48;
		t.left = 0;
		t.strokeColor = 0xffffff;
		t.top = 0;
		t.width = 320;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.skinName = "golden_coin";
		t.verticalCenter = 0;
		t.x = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Label";
		t.x = 54;
		t.y = 12;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "+200亿";
		t.textColor = 0xe1b40e;
		t.x = 48;
		t.y = 15;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "2019-02-08 14:22";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 200;
		return t;
	};
	return scores;
})(eui.Skin);generateEUI.paths['resource/skins/MainScene.exml'] = window.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	var MainSceneSkin$Skin2 = 	(function (_super) {
		__extends(MainSceneSkin$Skin2, _super);
		function MainSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btn_start_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btn_start_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin2;
	})(eui.Skin);

	var MainSceneSkin$Skin3 = 	(function (_super) {
		__extends(MainSceneSkin$Skin3, _super);
		function MainSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btn_rule_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btn_rule_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin3;
	})(eui.Skin);

	var MainSceneSkin$Skin4 = 	(function (_super) {
		__extends(MainSceneSkin$Skin4, _super);
		function MainSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btn_shop_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btn_shop_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin4;
	})(eui.Skin);

	var MainSceneSkin$Skin5 = 	(function (_super) {
		__extends(MainSceneSkin$Skin5, _super);
		function MainSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btn_list_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btn_list_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainSceneSkin$Skin5;
	})(eui.Skin);

	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["mbtn_start","btnRule","btnStore","btnRank","group_mbtn"];
		
		this.height = 667;
		this.width = 375;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.mbtn_start_i(),this.group_mbtn_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_home_jpg";
		t.top = 0;
		t.percentWidth = 100;
		t.x = -12;
		t.y = -36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 125;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "theme_jznf_png";
		t.top = 0;
		t.width = 375;
		t.x = -12;
		t.y = -36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "theme_gold_pig_png";
		t.top = 14;
		t.percentWidth = 100;
		t.x = -12;
		t.y = -36;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "word_zn_png";
		t.width = 274;
		t.x = 39;
		t.y = 128;
		return t;
	};
	_proto.mbtn_start_i = function () {
		var t = new eui.Button();
		this.mbtn_start = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 50;
		t.height = 73.3;
		t.horizontalCenter = 3.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 448;
		t.width = 197.9;
		t.y = 400;
		t.skinName = MainSceneSkin$Skin2;
		return t;
	};
	_proto.group_mbtn_i = function () {
		var t = new eui.Group();
		this.group_mbtn = t;
		t.bottom = 34;
		t.height = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.elementsContent = [this.btnRule_i(),this.btnStore_i(),this.btnRank_i()];
		return t;
	};
	_proto.btnRule_i = function () {
		var t = new eui.ToggleButton();
		this.btnRule = t;
		t.height = 80;
		t.label = "";
		t.left = 48;
		t.top = 26;
		t.width = 66.7;
		t.skinName = MainSceneSkin$Skin3;
		return t;
	};
	_proto.btnStore_i = function () {
		var t = new eui.ToggleButton();
		this.btnStore = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 26;
		t.width = 66.7;
		t.skinName = MainSceneSkin$Skin4;
		return t;
	};
	_proto.btnRank_i = function () {
		var t = new eui.ToggleButton();
		this.btnRank = t;
		t.height = 80;
		t.label = "";
		t.right = 48;
		t.top = 26;
		t.width = 66.7;
		t.skinName = MainSceneSkin$Skin5;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PlayScene.exml'] = window.PlaySceneSkin = (function (_super) {
	__extends(PlaySceneSkin, _super);
	var PlaySceneSkin$Skin6 = 	(function (_super) {
		__extends(PlaySceneSkin$Skin6, _super);
		function PlaySceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dj_ss88_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlaySceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dj_ss88_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlaySceneSkin$Skin6;
	})(eui.Skin);

	var PlaySceneSkin$Skin7 = 	(function (_super) {
		__extends(PlaySceneSkin$Skin7, _super);
		function PlaySceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dj_sh88_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlaySceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dj_sh88_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlaySceneSkin$Skin7;
	})(eui.Skin);

	var PlaySceneSkin$Skin8 = 	(function (_super) {
		__extends(PlaySceneSkin$Skin8, _super);
		function PlaySceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dj_double_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlaySceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dj_double_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlaySceneSkin$Skin8;
	})(eui.Skin);

	var PlaySceneSkin$Skin9 = 	(function (_super) {
		__extends(PlaySceneSkin$Skin9, _super);
		function PlaySceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dj_time88_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlaySceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dj_time88_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlaySceneSkin$Skin9;
	})(eui.Skin);

	var PlaySceneSkin$Skin10 = 	(function (_super) {
		__extends(PlaySceneSkin$Skin10, _super);
		function PlaySceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","icon_back60_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlaySceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "icon_back60_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlaySceneSkin$Skin10;
	})(eui.Skin);

	function PlaySceneSkin() {
		_super.call(this);
		this.skinParts = ["my_pig","playYaoshui","playShield","playerGoldcoin","playTimer","group_tool","pbtn_return","p_score","p_heart_num","per_name","pig","nicon_skullcoin","nicon_lightning","nicon_lock","nagetive_group","p_role","icon_progressbar","tool_icon","positive_group"];
		
		this.height = 667;
		this.width = 375;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.my_pig_i(),this.group_tool_i(),this.pbtn_return_i(),this._Button1_i(),this._Image4_i(),this.p_score_i(),this.p_heart_num_i(),this.p_role_i(),this.positive_group_i()];
	}
	var _proto = PlaySceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "bg_play_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.left = 0;
		t.source = "top_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 140;
		t.left = 0;
		t.source = "down_play_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.my_pig_i = function () {
		var t = new eui.Image();
		this.my_pig = t;
		t.height = 102;
		t.horizontalCenter = 0;
		t.source = "pig_png";
		t.visible = false;
		t.width = 91;
		t.y = 503;
		return t;
	};
	_proto.group_tool_i = function () {
		var t = new eui.Group();
		this.group_tool = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 48;
		t.left = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.playYaoshui_i(),this.playShield_i(),this.playerGoldcoin_i(),this.playTimer_i()];
		return t;
	};
	_proto.playYaoshui_i = function () {
		var t = new eui.Button();
		this.playYaoshui = t;
		t.height = 44;
		t.label = "";
		t.left = 53;
		t.name = "yaoshui";
		t.top = 0;
		t.width = 44;
		t.skinName = PlaySceneSkin$Skin6;
		return t;
	};
	_proto.playShield_i = function () {
		var t = new eui.Button();
		this.playShield = t;
		t.height = 44;
		t.label = "";
		t.left = 128;
		t.name = "dj_sh88_png";
		t.top = 0;
		t.width = 44;
		t.skinName = PlaySceneSkin$Skin7;
		return t;
	};
	_proto.playerGoldcoin_i = function () {
		var t = new eui.Button();
		this.playerGoldcoin = t;
		t.height = 44;
		t.label = "";
		t.left = 203;
		t.name = "dj_double_png";
		t.top = 0;
		t.width = 44;
		t.skinName = PlaySceneSkin$Skin8;
		return t;
	};
	_proto.playTimer_i = function () {
		var t = new eui.Button();
		this.playTimer = t;
		t.height = 44;
		t.label = "";
		t.left = 278;
		t.name = "dj_time88_png";
		t.top = 0;
		t.width = 44;
		t.skinName = PlaySceneSkin$Skin9;
		return t;
	};
	_proto.pbtn_return_i = function () {
		var t = new eui.Button();
		this.pbtn_return = t;
		t.height = 33.3;
		t.label = "";
		t.left = 15;
		t.top = 8;
		t.width = 33.3;
		t.skinName = PlaySceneSkin$Skin10;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.left = 146;
		t.skinName = "golden_coin";
		t.top = 9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.source = "dj_life114_png";
		t.top = 5;
		t.width = 38;
		t.x = 307;
		return t;
	};
	_proto.p_score_i = function () {
		var t = new eui.Label();
		this.p_score = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "+0万";
		t.textColor = 0xe1b40e;
		t.x = 178;
		t.y = 15;
		return t;
	};
	_proto.p_heart_num_i = function () {
		var t = new eui.Label();
		this.p_heart_num = t;
		t.size = 14;
		t.text = "x2";
		t.x = 341;
		t.y = 21;
		return t;
	};
	_proto.p_role_i = function () {
		var t = new eui.Group();
		this.p_role = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.width = 91;
		t.x = 142;
		t.y = 490;
		t.elementsContent = [this.per_name_i(),this.pig_i(),this.nagetive_group_i()];
		return t;
	};
	_proto.per_name_i = function () {
		var t = new eui.Label();
		this.per_name = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "xxx";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.pig_i = function () {
		var t = new eui.Image();
		this.pig = t;
		t.height = 102;
		t.source = "pig_png";
		t.width = 91;
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto.nagetive_group_i = function () {
		var t = new eui.Group();
		this.nagetive_group = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = -10;
		t.elementsContent = [this.nicon_skullcoin_i(),this.nicon_lightning_i(),this.nicon_lock_i()];
		return t;
	};
	_proto.nicon_skullcoin_i = function () {
		var t = new eui.Image();
		this.nicon_skullcoin = t;
		t.height = 30;
		t.left = 0;
		t.source = "dj_dj114_png";
		t.top = 0;
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.nicon_lightning_i = function () {
		var t = new eui.Image();
		this.nicon_lightning = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.source = "dj_lightening114_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.nicon_lock_i = function () {
		var t = new eui.Image();
		this.nicon_lock = t;
		t.height = 30;
		t.right = 0;
		t.source = "dj_lock114_png";
		t.top = 0;
		t.visible = false;
		t.width = 30;
		return t;
	};
	_proto.positive_group_i = function () {
		var t = new eui.Group();
		this.positive_group = t;
		t.bottom = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this.icon_progressbar_i(),this.tool_icon_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.horizontalCenter = 0;
		t.source = "jdt_bg_png";
		t.verticalCenter = 0;
		t.width = 313;
		return t;
	};
	_proto.icon_progressbar_i = function () {
		var t = new eui.Image();
		this.icon_progressbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "jdt_png";
		t.width = 302;
		t.x = 37;
		t.y = 14;
		return t;
	};
	_proto.tool_icon_i = function () {
		var t = new eui.Image();
		this.tool_icon = t;
		t.height = 42;
		t.verticalCenter = 0;
		t.width = 42;
		t.x = 18;
		return t;
	};
	return PlaySceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankScene.exml'] = window.RankSceneSkin = (function (_super) {
	__extends(RankSceneSkin, _super);
	function RankSceneSkin() {
		_super.call(this);
		this.skinParts = ["rbtn_close","rimg_avatar","rinf_group"];
		
		this.height = 667;
		this.width = 375;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Image4_i(),this.rbtn_close_i(),this.rinf_group_i(),this._Scroller1_i()];
	}
	var _proto = RankSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "bg_play_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 390;
		t.horizontalCenter = 0;
		t.source = "bg_list_w_png";
		t.top = 137;
		t.width = 330;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.horizontalCenter = 0;
		t.source = "title_list_png";
		t.top = 158;
		t.width = 261;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16;
		t.width = 330;
		t.x = 23;
		t.y = 219;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "排名";
		t.textColor = 0x666666;
		t.top = 0;
		t.x = 18;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "姓名";
		t.textColor = 0x666666;
		t.top = 0;
		t.x = 115;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 12;
		t.text = "最高赚钱记录";
		t.textColor = 0x666666;
		t.top = 0;
		t.x = 225;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0.5;
		t.source = "bg_mine_png";
		t.width = 330;
		t.y = 58;
		return t;
	};
	_proto.rbtn_close_i = function () {
		var t = new eui.Button();
		this.rbtn_close = t;
		t.label = "";
		t.skinName = "btn_close";
		t.x = 333;
		t.y = 129;
		return t;
	};
	_proto.rinf_group_i = function () {
		var t = new eui.Group();
		this.rinf_group = t;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 330;
		t.y = 58;
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Image5_i(),this._Button1_i(),this.rimg_avatar_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 14;
		t.text = "999+";
		t.textColor = 0x333333;
		t.x = 17;
		t.y = 14;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 11;
		t.text = "排名";
		t.textColor = 0x666666;
		t.x = 26;
		t.y = 34;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 14;
		t.size = 14;
		t.text = "遇安";
		t.textColor = 0x333333;
		t.x = 120;
		t.y = 12;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 11;
		t.text = "02-04 09:30";
		t.textColor = 0x666666;
		t.x = 121;
		t.y = 35;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 15;
		t.text = "+2019亿";
		t.textColor = 0xe1b40e;
		t.x = 237;
		t.y = 22;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.source = "icon_enter_png";
		t.verticalCenter = 0;
		t.width = 14;
		t.x = 314;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 26;
		t.label = "";
		t.skinName = "golden_coin";
		t.width = 26;
		t.x = 207;
		t.y = 17;
		return t;
	};
	_proto.rimg_avatar_i = function () {
		var t = new eui.Image();
		this.rimg_avatar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.left = 72;
		t.source = "";
		t.top = 10;
		t.width = 40;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 285;
		t.width = 329;
		t.x = 23;
		t.y = 236;
		t.viewport = this._List1_i();
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
		t.itemRendererSkinName = records_item;
		return t;
	};
	return RankSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RecordScene.exml'] = window.RecordSceneSkin = (function (_super) {
	__extends(RecordSceneSkin, _super);
	function RecordSceneSkin() {
		_super.call(this);
		this.skinParts = ["rcd_ava","rcd_uname","rcd_scores","rcd_group","sbtn_back","rcd_list","rcd_scroll"];
		
		this.height = 667;
		this.width = 375;
		this.elementsContent = [this._Image1_i(),this.rcd_group_i(),this.sbtn_back_i(),this._Rect1_i(),this._Image2_i(),this.rcd_scroll_i(),this._Image3_i()];
	}
	var _proto = RecordSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "bg_mine_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.rcd_group_i = function () {
		var t = new eui.Group();
		this.rcd_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.left = 0;
		t.top = 61;
		t.width = 301;
		t.elementsContent = [this.rcd_ava_i(),this.rcd_uname_i(),this._Label1_i(),this.rcd_scores_i(),this._Label2_i()];
		return t;
	};
	_proto.rcd_ava_i = function () {
		var t = new eui.Image();
		this.rcd_ava = t;
		t.height = 55;
		t.width = 55;
		t.x = 20;
		t.y = 22;
		return t;
	};
	_proto.rcd_uname_i = function () {
		var t = new eui.Label();
		this.rcd_uname = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "张三李四";
		t.x = 83;
		t.y = 26;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "最高记录：";
		t.x = 86;
		t.y = 60;
		return t;
	};
	_proto.rcd_scores_i = function () {
		var t = new eui.Label();
		this.rcd_scores = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "2301亿";
		t.textColor = 0xfff100;
		t.x = 146;
		t.y = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 12;
		t.text = "猪年行大运，财源滚滚来";
		t.x = 20;
		t.y = 92;
		return t;
	};
	_proto.sbtn_back_i = function () {
		var t = new eui.Button();
		this.sbtn_back = t;
		t.label = "";
		t.skinName = "btn_return";
		t.x = 20;
		t.y = 11;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 390;
		t.horizontalCenter = 0.5;
		t.strokeColor = 0xffffff;
		t.width = 320;
		t.y = 232;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60.5;
		t.horizontalCenter = 0.5;
		t.source = "title_mine_png";
		t.top = 181;
		t.width = 354;
		return t;
	};
	_proto.rcd_scroll_i = function () {
		var t = new eui.Scroller();
		this.rcd_scroll = t;
		t.anchorOffsetY = 0;
		t.height = 329;
		t.horizontalCenter = 0.5;
		t.width = 320;
		t.y = 293;
		t.viewport = this.rcd_list_i();
		return t;
	};
	_proto.rcd_list_i = function () {
		var t = new eui.List();
		this.rcd_list = t;
		t.itemRendererSkinName = scores;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.horizontalCenter = 0;
		t.source = "title_list_png";
		t.width = 261;
		t.y = 249;
		return t;
	};
	return RecordSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RuleScene.exml'] = window.RuleSceneSkin = (function (_super) {
	__extends(RuleSceneSkin, _super);
	function RuleSceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = RuleSceneSkin.prototype;

	return RuleSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StoreScene.exml'] = window.StoreSceneSkin = (function (_super) {
	__extends(StoreSceneSkin, _super);
	function StoreSceneSkin() {
		_super.call(this);
		this.skinParts = ["store_list","scr_shop","sbtn_return"];
		
		this.height = 667;
		this.width = 375;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.scr_shop_i(),this.sbtn_return_i()];
	}
	var _proto = StoreSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "bg_play_jpg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 425;
		t.horizontalCenter = 0.5;
		t.source = "img_shop_png";
		t.top = 95;
		t.width = 340;
		return t;
	};
	_proto.scr_shop_i = function () {
		var t = new eui.Scroller();
		this.scr_shop = t;
		t.anchorOffsetX = 0;
		t.height = 240;
		t.horizontalScrollBar = false;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.top = 241;
		t.width = 316;
		t.x = 31;
		t.viewport = this.store_list_i();
		return t;
	};
	_proto.store_list_i = function () {
		var t = new eui.List();
		this.store_list = t;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.itemRendererSkinName = goods_item;
		t.x = 0;
		t.y = 1;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingLeft = 20;
		return t;
	};
	_proto.sbtn_return_i = function () {
		var t = new eui.Button();
		this.sbtn_return = t;
		t.label = "";
		t.skinName = "btn_close";
		t.x = 326;
		t.y = 138;
		return t;
	};
	return StoreSceneSkin;
})(eui.Skin);