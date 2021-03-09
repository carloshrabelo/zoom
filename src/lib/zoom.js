import { ZoomMtg } from '@zoomus/websdk'

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av')
ZoomMtg.preLoadWasm()
ZoomMtg.prepareJssdk()

export default ZoomMtg
