const log = require('@ajar/marker')

const {slugerion} = require('./index')


const result = slugerion('these are very strange days','in which we all','work from home')

log.info(result)