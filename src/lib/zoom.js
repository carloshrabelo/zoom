import { ZoomMtg } from '@zoomus/websdk'

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.8.6/lib', '/av')
ZoomMtg.preLoadWasm()
ZoomMtg.prepareJssdk()

export default ZoomMtg
