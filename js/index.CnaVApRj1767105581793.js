import { importShared, IconWrapper, _objectWithoutProperties, useTheme, getFirstValidNode, ExclamationCircleFilled, CloseCircleFilled, CLOSE_EVENT, getPrefixCls, _defineProperty, PopupManager } from './index.BxB45aCK1767105581793.js';

const {createVNode: createVNode$5} = await importShared('vue');

var CloseCircleOutlined = props => createVNode$5(IconWrapper, props, {
  default: () => [createVNode$5("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$5("path", {
    "d": "M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm0 64a405.333 405.333 0 1 0 0 810.666 405.333 405.333 0 0 0 0-810.666zm140.288 243.925 21.12 21.12a17.067 17.067 0 0 1 0 24.15L557.269 512l116.139 116.139a17.067 17.067 0 0 1 0 24.149l-21.12 21.12a17.067 17.067 0 0 1-24.15 0L512 557.269 395.861 673.408a17.067 17.067 0 0 1-24.149 0l-21.12-21.12a17.067 17.067 0 0 1 0-24.15L466.731 512 350.592 395.861a17.067 17.067 0 0 1 0-24.149l21.12-21.12a17.067 17.067 0 0 1 24.15 0L512 466.731l116.139-116.139a17.067 17.067 0 0 1 24.149 0z"
  }, null)])]
});

const {createVNode: createVNode$4} = await importShared('vue');

var CheckCircleFilled = props => createVNode$4(IconWrapper, props, {
  default: () => [createVNode$4("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$4("path", {
    "d": "M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm180.821 265.472a21.333 21.333 0 0 0-26.709 5.845l-220.16 283.733-88.064-113.493a21.333 21.333 0 0 0-29.91-3.755l-16.853 13.056a21.333 21.333 0 0 0-3.84 29.952l121.771 156.928a21.333 21.333 0 0 0 33.707 0l253.909-327.168a21.333 21.333 0 0 0-3.755-29.952l-16.853-13.056z"
  }, null)])]
});

const {createVNode: createVNode$3} = await importShared('vue');

var InfoCircleFilled = props => createVNode$3(IconWrapper, props, {
  default: () => [createVNode$3("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$3("path", {
    "d": "M512 981.333C252.8 981.333 42.667 771.2 42.667 512S252.8 42.667 512 42.667 981.333 252.8 981.333 512 771.2 981.333 512 981.333zm0-626.474a42.667 42.667 0 1 0 0-85.334 42.667 42.667 0 0 0 0 85.334zm-10.667 417.365h21.334a21.333 21.333 0 0 0 20.992-17.493l.341-3.84V438.912a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341h-21.334a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v312.021a21.333 21.333 0 0 0 17.493 20.992l3.84.342z"
  }, null)])]
});

const {defineComponent: defineComponent$1,ref: ref$1,onBeforeUnmount,cloneVNode,createVNode: createVNode$2,TransitionGroup,createApp,onMounted,mergeProps} = await importShared('vue');

const _excluded = ["getContainer"];
let seed = 0;
const now = Date.now();
function genUid() {
  return `notice_manager_${now}_${seed++}`;
}
const Notification = defineComponent$1({
  props: {
    maxCount: Number,
    transitionName: String
  },
  setup(props) {
    const notices = ref$1([]);
    const timers = new Set();
    function remove(key) {
      const index = notices.value.findIndex(item => item.key === key);
      const notice = notices.value[index];
      if (notice) {
        var _notice$afterRemove;
        notices.value.splice(index, 1);
        (_notice$afterRemove = notice.afterRemove) === null || _notice$afterRemove === void 0 || _notice$afterRemove.call(notice);
      }
    }
    function append(notice) {
      if (!notice.key) {
        notice.key = genUid();
      }
      if (props.maxCount && notices.value.length >= props.maxCount) {
        notices.value.shift();
      }
      notices.value.push(notice);
      if (notice.duration > 0) {
        const timer = setTimeout(() => {
          remove(notice.key);
          clearTimeout(timer);
        }, notice.duration * 1000);
        timers.add(timer);
      }
      return notice;
    }
    onBeforeUnmount(() => {
      // 清理所有未触发的定时器
      timers.forEach(timer => {
        clearTimeout(timer);
      });
      timers.clear();
    });
    return {
      notices,
      append,
      remove
    };
  },
  render() {
    const {
      notices,
      transitionName
    } = this;
    const children = notices.map(notice => {
      let vNode = typeof notice.children === 'function' ? notice.children() : notice.children;
      vNode = getFirstValidNode([vNode]);
      if (vNode) {
        return cloneVNode(vNode, {
          key: notice.key
        });
      }
    });
    return createVNode$2(TransitionGroup, {
      "name": transitionName,
      "tag": "div"
    }, {
      default: () => [children]
    });
  }
});
function createManager(opt) {
  return new Promise(resolve => {
    const {
        getContainer
      } = opt,
      props = _objectWithoutProperties(opt, _excluded);
    const div = document.createElement('div');
    if (getContainer) {
      const root = getContainer();
      root === null || root === void 0 || root.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
    const app = createApp({
      setup() {
        useTheme();
        const notificationRef = ref$1();
        const instance = {
          append: noticeProps => notificationRef.value.append(noticeProps),
          remove: key => notificationRef.value.remove(key),
          destroy() {
            app.unmount();
            if (div.parentNode) {
              div.parentNode.removeChild(div);
            }
          },
          exited() {
            // 容器是否存在
            if (!getContainer) {
              return true;
            }
            try {
              if (!getContainer()) {
                instance.destroy();
                return false;
              }
            } catch (error) {
              instance.destroy();
              return false;
            }
            return true;
          }
        };
        onMounted(() => resolve(instance));
        return () => createVNode$2(Notification, mergeProps({
          "ref": notificationRef
        }, props), null);
      }
    });
    app.mount(div);
  });
}
const iconComponentMap = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};

const {defineComponent,ref,computed,createVNode: createVNode$1,Transition} = await importShared('vue');

const prefixCls$1 = getPrefixCls('alert');
const alertProps = {
  message: String,
  description: String,
  showIcon: Boolean,
  closable: Boolean,
  center: Boolean,
  type: {
    type: String,
    default: 'info'
  },
  beforeClose: {
    type: Function,
    default: () => true
  }
};
var alert = defineComponent({
  name: 'FAlert',
  props: alertProps,
  emits: [CLOSE_EVENT],
  setup(props, ctx) {
    useTheme();
    const visible = ref(true);
    function handleCloseClick(event) {
      var _props$beforeClose;
      Promise.resolve((_props$beforeClose = props.beforeClose) === null || _props$beforeClose === void 0 ? void 0 : _props$beforeClose.call(props, event)).then(res => {
        if (res) {
          visible.value = false;
          ctx.emit(CLOSE_EVENT);
        }
      });
    }
    const bodyClass = computed(() => [`${prefixCls$1}-body`, props.showIcon && !props.center && `${prefixCls$1}-icon-padding`]);
    const renderIcon = () => {
      var _iconComponentMap$pro;
      return ctx.slots.icon ? ctx.slots.icon() : (_iconComponentMap$pro = iconComponentMap[props.type]) === null || _iconComponentMap$pro === void 0 ? void 0 : _iconComponentMap$pro.call(iconComponentMap);
    };
    return () => {
      const {
        action: actionSlot,
        default: defaultSlot,
        description: descriptionSlot
      } = ctx.slots;
      const description = props.description || descriptionSlot ? createVNode$1("div", {
        "class": bodyClass.value
      }, [descriptionSlot ? descriptionSlot() : props.description]) : null;
      return createVNode$1(Transition, {
        "name": `${prefixCls$1}-fade-expand`
      }, {
        default: () => [!visible.value ? null : createVNode$1("div", {
          "class": `${prefixCls$1} ${props.center ? `${prefixCls$1}-message-center` : ''} ${prefixCls$1}-${props.type}`
        }, [createVNode$1("div", {
          "class": `${prefixCls$1}-head`
        }, [createVNode$1("div", {
          "class": `${prefixCls$1}-head-message`
        }, [props.showIcon ? createVNode$1("div", {
          "class": `${prefixCls$1}-head-message-icon`
        }, [renderIcon()]) : null, createVNode$1("div", null, [defaultSlot ? defaultSlot() : props.message])]), createVNode$1("div", {
          "class": `${prefixCls$1}-head-right`
        }, [actionSlot ? createVNode$1("div", {
          "class": `${prefixCls$1}-head-right-action`
        }, [actionSlot()]) : null, props.closable ? createVNode$1("div", {
          "class": `${prefixCls$1}-head-right-close`
        }, [createVNode$1(CloseCircleOutlined, {
          "onClick": handleCloseClick
        }, null)]) : null])]), description])]
      });
    };
  }
});

const {reactive,createVNode} = await importShared('vue');

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const prefixCls = getPrefixCls('message');
const defaultConfig = {
  duration: 3,
  getContainer: () => document.body,
  top: '24px',
  colorful: false
};
let mergeConfig = defaultConfig;
let messageInstance = null;
const managerStyle = reactive({
  zIndex: 0,
  top: mergeConfig.top
});
function create(_ref) {
  var _messageInstance3, _messageInstance3$exi;
  let {
    type,
    content,
    duration,
    icon,
    closable,
    afterClose,
    colorful
  } = _ref;
  managerStyle.zIndex = PopupManager.nextZIndex();
  let item = null;
  function handleItemCloseClick() {
    var _messageInstance, _item;
    item && ((_messageInstance = messageInstance) === null || _messageInstance === void 0 ? void 0 : _messageInstance.remove((_item = item) === null || _item === void 0 ? void 0 : _item.key));
    item = null;
  }
  function destroyItem() {
    var _messageInstance2, _item2;
    item && ((_messageInstance2 = messageInstance) === null || _messageInstance2 === void 0 ? void 0 : _messageInstance2.remove((_item2 = item) === null || _item2 === void 0 ? void 0 : _item2.key));
    item = null;
  }
  function renderItem() {
    const classNames = [`${prefixCls}`];
    // 当前colorful判断优先
    if (!(colorful || colorful !== false && mergeConfig.colorful)) {
      classNames.push(`${prefixCls}-no-colorful`);
    }
    if (closable) {
      classNames.push(`${prefixCls}-close`);
    }
    const contentIsFunc = typeof content === 'function';
    const iconIsFunc = typeof icon === 'function';
    const scopedSlots = {
      default: contentIsFunc ? content : null,
      icon: iconIsFunc ? icon : null
    };
    item = messageInstance.append({
      afterRemove: afterClose,
      duration: duration != null && duration >= 0 ? duration : mergeConfig.duration,
      style: {
        zIndex: PopupManager.nextZIndex()
      },
      children: createVNode("div", {
        "class": `${prefixCls}-item`
      }, [createVNode(alert, {
        "class": classNames,
        "type": type,
        "message": contentIsFunc ? '' : content,
        "showIcon": true,
        "closable": closable,
        "onClose": handleItemCloseClick
      }, scopedSlots)])
    });
  }
  if (!((_messageInstance3 = messageInstance) !== null && _messageInstance3 !== void 0 && (_messageInstance3$exi = _messageInstance3.exited) !== null && _messageInstance3$exi !== void 0 && _messageInstance3$exi.call(_messageInstance3))) {
    createManager({
      getContainer: mergeConfig.getContainer,
      transitionName: `${prefixCls}`,
      class: `${prefixCls}-wrapper`,
      maxCount: mergeConfig.maxCount,
      style: managerStyle
    }).then(instance => {
      messageInstance = instance;
      renderItem();
    });
  } else {
    renderItem();
  }
  return {
    destroy: destroyItem
  };
}
function message(type, options, duration) {
  const params = {
    type
  };
  if (typeof options === 'string') {
    params.content = options;
    params.duration = duration;
  } else {
    Object.assign(params, options);
  }
  return create(params);
}
const FMessage = {
  config(options) {
    if (options) {
      mergeConfig = _objectSpread(_objectSpread({}, defaultConfig), options);
    }
  },
  info: (content, duration) => message('info', content, duration),
  success: (content, duration) => message('success', content, duration),
  warning: (content, duration) => message('warning', content, duration),
  warn: (content, duration) => message('warning', content, duration),
  error: (content, duration) => message('error', content, duration),
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
    }
    messageInstance = null;
  }
};

export { FMessage };
//# sourceMappingURL=index.CnaVApRj1767105581793.js.map
