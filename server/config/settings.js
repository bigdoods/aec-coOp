module.exports = {
  httpAdminRoot: '/admin',
  httpNodeRoot: '/api',
  userDir: './config',
  flowFile: './config/lib/flows/flow.json',
  flowFilePretty: true,
  logging: {
      // Only console logging is currently supported
      console: {
          // Level of logging to be recorded. Options are:
          // fatal - only those errors which make the application unusable should be recorded
          // error - record errors which are deemed fatal for a particular request + fatal errors
          // warn - record problems which are non fatal + errors + fatal errors
          // info - record information about the general running of the application + warn + error + fatal errors
          // debug - record information which is more verbose than info + info + warn + error + fatal errors
          // trace - record very detailed logging + debug + info + warn + error + fatal errors
          // off - turn off all logging (doesn't affect metrics or audit)
          level: "info",
          // Whether or not to include metric events in the log output
          metrics: false,
          // Whether or not to include audit events in the log output
          audit: false
      }
  },
  // apiMaxLength: '50mb', // max size according to Zutec is 40MB
  functionGlobalContext: {
      contracts:require("rho-contracts")
  }
};