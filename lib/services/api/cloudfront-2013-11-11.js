/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'rest-xml',
  apiVersion: '2013-11-11',
  endpointPrefix: 'cloudfront',
  globalEndpoint: 'cloudfront.amazonaws.com',
  serviceAbbreviation: 'CloudFront',
  serviceFullName: 'Amazon CloudFront',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  xmlnamespace: 'http://cloudfront.amazonaws.com/doc/2013-11-11/',
  operations: {
    createCloudFrontOriginAccessIdentity: {
      name: 'CreateCloudFrontOriginAccessIdentity2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront',
        method: 'POST'
      },
      input: {
        payload: 'CloudFrontOriginAccessIdentityConfig',
        type: 'structure',
        members: {
          CloudFrontOriginAccessIdentityConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              Comment: {
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          S3CanonicalUserId: {
          },
          CloudFrontOriginAccessIdentityConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    createDistribution: {
      name: 'CreateDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/distribution',
        method: 'POST'
      },
      input: {
        payload: 'DistributionConfig',
        type: 'structure',
        members: {
          DistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                },
                required: true
              },
              DefaultRootObject: {
                required: true
              },
              Origins: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Id: {
                          required: true
                        },
                        DomainName: {
                          required: true
                        },
                        S3OriginConfig: {
                          type: 'structure',
                          members: {
                            OriginAccessIdentity: {
                              required: true
                            }
                          }
                        },
                        CustomOriginConfig: {
                          type: 'structure',
                          members: {
                            HTTPPort: {
                              type: 'integer',
                              required: true
                            },
                            HTTPSPort: {
                              type: 'integer',
                              required: true
                            },
                            OriginProtocolPolicy: {
                              required: true
                            }
                          }
                        }
                      },
                      name: 'Origin'
                    }
                  }
                },
                required: true
              },
              DefaultCacheBehavior: {
                type: 'structure',
                members: {
                  TargetOriginId: {
                    required: true
                  },
                  ForwardedValues: {
                    type: 'structure',
                    members: {
                      QueryString: {
                        type: 'boolean',
                        required: true
                      },
                      Cookies: {
                        type: 'structure',
                        members: {
                          Forward: {
                            required: true
                          },
                          WhitelistedNames: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer',
                                required: true
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Name'
                                }
                              }
                            }
                          }
                        },
                        required: true
                      }
                    },
                    required: true
                  },
                  TrustedSigners: {
                    type: 'structure',
                    members: {
                      Enabled: {
                        type: 'boolean',
                        required: true
                      },
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'AwsAccountNumber'
                        }
                      }
                    },
                    required: true
                  },
                  ViewerProtocolPolicy: {
                    required: true
                  },
                  MinTTL: {
                    type: 'integer',
                    required: true
                  },
                  AllowedMethods: {
                    type: 'structure',
                    members: {
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Method'
                        }
                      }
                    }
                  }
                },
                required: true
              },
              CacheBehaviors: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        PathPattern: {
                          required: true
                        },
                        TargetOriginId: {
                          required: true
                        },
                        ForwardedValues: {
                          type: 'structure',
                          members: {
                            QueryString: {
                              type: 'boolean',
                              required: true
                            },
                            Cookies: {
                              type: 'structure',
                              members: {
                                Forward: {
                                  required: true
                                },
                                WhitelistedNames: {
                                  type: 'structure',
                                  members: {
                                    Quantity: {
                                      type: 'integer',
                                      required: true
                                    },
                                    Items: {
                                      type: 'list',
                                      members: {
                                        name: 'Name'
                                      }
                                    }
                                  }
                                }
                              },
                              required: true
                            }
                          },
                          required: true
                        },
                        TrustedSigners: {
                          type: 'structure',
                          members: {
                            Enabled: {
                              type: 'boolean',
                              required: true
                            },
                            Quantity: {
                              type: 'integer',
                              required: true
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'AwsAccountNumber'
                              }
                            }
                          },
                          required: true
                        },
                        ViewerProtocolPolicy: {
                          required: true
                        },
                        MinTTL: {
                          type: 'integer',
                          required: true
                        },
                        AllowedMethods: {
                          type: 'structure',
                          members: {
                            Quantity: {
                              type: 'integer',
                              required: true
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'Method'
                              }
                            }
                          }
                        }
                      },
                      name: 'CacheBehavior'
                    }
                  }
                },
                required: true
              },
              CustomErrorResponses: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        ErrorCode: {
                          type: 'integer',
                          required: true
                        },
                        ResponsePagePath: {
                        },
                        ResponseCode: {
                        },
                        ErrorCachingMinTTL: {
                          type: 'integer'
                        }
                      },
                      name: 'CustomErrorResponse'
                    }
                  }
                }
              },
              Comment: {
                required: true
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  IncludeCookies: {
                    type: 'boolean',
                    required: true
                  },
                  Bucket: {
                    required: true
                  },
                  Prefix: {
                    required: true
                  }
                },
                required: true
              },
              PriceClass: {
                required: true
              },
              Enabled: {
                type: 'boolean',
                required: true
              },
              ViewerCertificate: {
                type: 'structure',
                members: {
                  IAMCertificateId: {
                  },
                  CloudFrontDefaultCertificate: {
                    type: 'boolean'
                  }
                }
              },
              Restrictions: {
                type: 'structure',
                members: {
                  GeoRestriction: {
                    type: 'structure',
                    members: {
                      RestrictionType: {
                        required: true
                      },
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Location'
                        }
                      }
                    },
                    required: true
                  }
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          InProgressInvalidationBatches: {
            type: 'integer'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          DistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              DefaultRootObject: {
              },
              Origins: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Id: {
                        },
                        DomainName: {
                        },
                        S3OriginConfig: {
                          type: 'structure',
                          members: {
                            OriginAccessIdentity: {
                            }
                          }
                        },
                        CustomOriginConfig: {
                          type: 'structure',
                          members: {
                            HTTPPort: {
                              type: 'integer'
                            },
                            HTTPSPort: {
                              type: 'integer'
                            },
                            OriginProtocolPolicy: {
                            }
                          }
                        }
                      },
                      name: 'Origin'
                    }
                  }
                }
              },
              DefaultCacheBehavior: {
                type: 'structure',
                members: {
                  TargetOriginId: {
                  },
                  ForwardedValues: {
                    type: 'structure',
                    members: {
                      QueryString: {
                        type: 'boolean'
                      },
                      Cookies: {
                        type: 'structure',
                        members: {
                          Forward: {
                          },
                          WhitelistedNames: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer'
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Name'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  TrustedSigners: {
                    type: 'structure',
                    members: {
                      Enabled: {
                        type: 'boolean'
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'AwsAccountNumber'
                        }
                      }
                    }
                  },
                  ViewerProtocolPolicy: {
                  },
                  MinTTL: {
                    type: 'integer'
                  },
                  AllowedMethods: {
                    type: 'structure',
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Method'
                        }
                      }
                    }
                  }
                }
              },
              CacheBehaviors: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        PathPattern: {
                        },
                        TargetOriginId: {
                        },
                        ForwardedValues: {
                          type: 'structure',
                          members: {
                            QueryString: {
                              type: 'boolean'
                            },
                            Cookies: {
                              type: 'structure',
                              members: {
                                Forward: {
                                },
                                WhitelistedNames: {
                                  type: 'structure',
                                  members: {
                                    Quantity: {
                                      type: 'integer'
                                    },
                                    Items: {
                                      type: 'list',
                                      members: {
                                        name: 'Name'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        TrustedSigners: {
                          type: 'structure',
                          members: {
                            Enabled: {
                              type: 'boolean'
                            },
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'AwsAccountNumber'
                              }
                            }
                          }
                        },
                        ViewerProtocolPolicy: {
                        },
                        MinTTL: {
                          type: 'integer'
                        },
                        AllowedMethods: {
                          type: 'structure',
                          members: {
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'Method'
                              }
                            }
                          }
                        }
                      },
                      name: 'CacheBehavior'
                    }
                  }
                }
              },
              CustomErrorResponses: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        ErrorCode: {
                          type: 'integer'
                        },
                        ResponsePagePath: {
                        },
                        ResponseCode: {
                        },
                        ErrorCachingMinTTL: {
                          type: 'integer'
                        }
                      },
                      name: 'CustomErrorResponse'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  IncludeCookies: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              },
              ViewerCertificate: {
                type: 'structure',
                members: {
                  IAMCertificateId: {
                  },
                  CloudFrontDefaultCertificate: {
                    type: 'boolean'
                  }
                }
              },
              Restrictions: {
                type: 'structure',
                members: {
                  GeoRestriction: {
                    type: 'structure',
                    members: {
                      RestrictionType: {
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Location'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    createInvalidation: {
      name: 'CreateInvalidation2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{DistributionId}/invalidation',
        method: 'POST'
      },
      input: {
        payload: 'InvalidationBatch',
        type: 'structure',
        members: {
          DistributionId: {
            required: true,
            location: 'uri'
          },
          InvalidationBatch: {
            type: 'structure',
            members: {
              Paths: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'Path'
                    }
                  }
                },
                required: true
              },
              CallerReference: {
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          },
          Id: {
          },
          Status: {
          },
          CreateTime: {
            type: 'timestamp'
          },
          InvalidationBatch: {
            type: 'structure',
            members: {
              Paths: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'Path'
                    }
                  }
                }
              },
              CallerReference: {
              }
            }
          }
        }
      }
    },
    createStreamingDistribution: {
      name: 'CreateStreamingDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution',
        method: 'POST'
      },
      input: {
        payload: 'StreamingDistributionConfig',
        type: 'structure',
        members: {
          StreamingDistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              S3Origin: {
                type: 'structure',
                members: {
                  DomainName: {
                    required: true
                  },
                  OriginAccessIdentity: {
                    required: true
                  }
                },
                required: true
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                },
                required: true
              },
              Comment: {
                required: true
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  Bucket: {
                    required: true
                  },
                  Prefix: {
                    required: true
                  }
                },
                required: true
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                },
                required: true
              },
              PriceClass: {
                required: true
              },
              Enabled: {
                type: 'boolean',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Location: {
            location: 'header',
            name: 'Location'
          },
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          StreamingDistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              S3Origin: {
                type: 'structure',
                members: {
                  DomainName: {
                  },
                  OriginAccessIdentity: {
                  }
                }
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              }
            }
          }
        }
      }
    },
    deleteCloudFrontOriginAccessIdentity: {
      name: 'DeleteCloudFrontOriginAccessIdentity2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront/{Id}',
        method: 'DELETE'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteDistribution: {
      name: 'DeleteDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{Id}',
        method: 'DELETE'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteStreamingDistribution: {
      name: 'DeleteStreamingDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution/{Id}',
        method: 'DELETE'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    getCloudFrontOriginAccessIdentity: {
      name: 'GetCloudFrontOriginAccessIdentity2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront/{Id}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          S3CanonicalUserId: {
          },
          CloudFrontOriginAccessIdentityConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    getCloudFrontOriginAccessIdentityConfig: {
      name: 'GetCloudFrontOriginAccessIdentityConfig2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront/{Id}/config',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          CallerReference: {
          },
          Comment: {
          }
        }
      }
    },
    getDistribution: {
      name: 'GetDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{Id}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          InProgressInvalidationBatches: {
            type: 'integer'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          DistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              DefaultRootObject: {
              },
              Origins: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Id: {
                        },
                        DomainName: {
                        },
                        S3OriginConfig: {
                          type: 'structure',
                          members: {
                            OriginAccessIdentity: {
                            }
                          }
                        },
                        CustomOriginConfig: {
                          type: 'structure',
                          members: {
                            HTTPPort: {
                              type: 'integer'
                            },
                            HTTPSPort: {
                              type: 'integer'
                            },
                            OriginProtocolPolicy: {
                            }
                          }
                        }
                      },
                      name: 'Origin'
                    }
                  }
                }
              },
              DefaultCacheBehavior: {
                type: 'structure',
                members: {
                  TargetOriginId: {
                  },
                  ForwardedValues: {
                    type: 'structure',
                    members: {
                      QueryString: {
                        type: 'boolean'
                      },
                      Cookies: {
                        type: 'structure',
                        members: {
                          Forward: {
                          },
                          WhitelistedNames: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer'
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Name'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  TrustedSigners: {
                    type: 'structure',
                    members: {
                      Enabled: {
                        type: 'boolean'
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'AwsAccountNumber'
                        }
                      }
                    }
                  },
                  ViewerProtocolPolicy: {
                  },
                  MinTTL: {
                    type: 'integer'
                  },
                  AllowedMethods: {
                    type: 'structure',
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Method'
                        }
                      }
                    }
                  }
                }
              },
              CacheBehaviors: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        PathPattern: {
                        },
                        TargetOriginId: {
                        },
                        ForwardedValues: {
                          type: 'structure',
                          members: {
                            QueryString: {
                              type: 'boolean'
                            },
                            Cookies: {
                              type: 'structure',
                              members: {
                                Forward: {
                                },
                                WhitelistedNames: {
                                  type: 'structure',
                                  members: {
                                    Quantity: {
                                      type: 'integer'
                                    },
                                    Items: {
                                      type: 'list',
                                      members: {
                                        name: 'Name'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        TrustedSigners: {
                          type: 'structure',
                          members: {
                            Enabled: {
                              type: 'boolean'
                            },
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'AwsAccountNumber'
                              }
                            }
                          }
                        },
                        ViewerProtocolPolicy: {
                        },
                        MinTTL: {
                          type: 'integer'
                        },
                        AllowedMethods: {
                          type: 'structure',
                          members: {
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'Method'
                              }
                            }
                          }
                        }
                      },
                      name: 'CacheBehavior'
                    }
                  }
                }
              },
              CustomErrorResponses: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        ErrorCode: {
                          type: 'integer'
                        },
                        ResponsePagePath: {
                        },
                        ResponseCode: {
                        },
                        ErrorCachingMinTTL: {
                          type: 'integer'
                        }
                      },
                      name: 'CustomErrorResponse'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  IncludeCookies: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              },
              ViewerCertificate: {
                type: 'structure',
                members: {
                  IAMCertificateId: {
                  },
                  CloudFrontDefaultCertificate: {
                    type: 'boolean'
                  }
                }
              },
              Restrictions: {
                type: 'structure',
                members: {
                  GeoRestriction: {
                    type: 'structure',
                    members: {
                      RestrictionType: {
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Location'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getDistributionConfig: {
      name: 'GetDistributionConfig2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{Id}/config',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          CallerReference: {
          },
          Aliases: {
            type: 'structure',
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  name: 'CNAME'
                }
              }
            }
          },
          DefaultRootObject: {
          },
          Origins: {
            type: 'structure',
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    Id: {
                    },
                    DomainName: {
                    },
                    S3OriginConfig: {
                      type: 'structure',
                      members: {
                        OriginAccessIdentity: {
                        }
                      }
                    },
                    CustomOriginConfig: {
                      type: 'structure',
                      members: {
                        HTTPPort: {
                          type: 'integer'
                        },
                        HTTPSPort: {
                          type: 'integer'
                        },
                        OriginProtocolPolicy: {
                        }
                      }
                    }
                  },
                  name: 'Origin'
                }
              }
            }
          },
          DefaultCacheBehavior: {
            type: 'structure',
            members: {
              TargetOriginId: {
              },
              ForwardedValues: {
                type: 'structure',
                members: {
                  QueryString: {
                    type: 'boolean'
                  },
                  Cookies: {
                    type: 'structure',
                    members: {
                      Forward: {
                      },
                      WhitelistedNames: {
                        type: 'structure',
                        members: {
                          Quantity: {
                            type: 'integer'
                          },
                          Items: {
                            type: 'list',
                            members: {
                              name: 'Name'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                }
              },
              ViewerProtocolPolicy: {
              },
              MinTTL: {
                type: 'integer'
              },
              AllowedMethods: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'Method'
                    }
                  }
                }
              }
            }
          },
          CacheBehaviors: {
            type: 'structure',
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    PathPattern: {
                    },
                    TargetOriginId: {
                    },
                    ForwardedValues: {
                      type: 'structure',
                      members: {
                        QueryString: {
                          type: 'boolean'
                        },
                        Cookies: {
                          type: 'structure',
                          members: {
                            Forward: {
                            },
                            WhitelistedNames: {
                              type: 'structure',
                              members: {
                                Quantity: {
                                  type: 'integer'
                                },
                                Items: {
                                  type: 'list',
                                  members: {
                                    name: 'Name'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    TrustedSigners: {
                      type: 'structure',
                      members: {
                        Enabled: {
                          type: 'boolean'
                        },
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'AwsAccountNumber'
                          }
                        }
                      }
                    },
                    ViewerProtocolPolicy: {
                    },
                    MinTTL: {
                      type: 'integer'
                    },
                    AllowedMethods: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'Method'
                          }
                        }
                      }
                    }
                  },
                  name: 'CacheBehavior'
                }
              }
            }
          },
          CustomErrorResponses: {
            type: 'structure',
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    ErrorCode: {
                      type: 'integer'
                    },
                    ResponsePagePath: {
                    },
                    ResponseCode: {
                    },
                    ErrorCachingMinTTL: {
                      type: 'integer'
                    }
                  },
                  name: 'CustomErrorResponse'
                }
              }
            }
          },
          Comment: {
          },
          Logging: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              IncludeCookies: {
                type: 'boolean'
              },
              Bucket: {
              },
              Prefix: {
              }
            }
          },
          PriceClass: {
          },
          Enabled: {
            type: 'boolean'
          },
          ViewerCertificate: {
            type: 'structure',
            members: {
              IAMCertificateId: {
              },
              CloudFrontDefaultCertificate: {
                type: 'boolean'
              }
            }
          },
          Restrictions: {
            type: 'structure',
            members: {
              GeoRestriction: {
                type: 'structure',
                members: {
                  RestrictionType: {
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'Location'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    getInvalidation: {
      name: 'GetInvalidation2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{DistributionId}/invalidation/{Id}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          DistributionId: {
            required: true,
            location: 'uri'
          },
          Id: {
            required: true,
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Id: {
          },
          Status: {
          },
          CreateTime: {
            type: 'timestamp'
          },
          InvalidationBatch: {
            type: 'structure',
            members: {
              Paths: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'Path'
                    }
                  }
                }
              },
              CallerReference: {
              }
            }
          }
        }
      }
    },
    getStreamingDistribution: {
      name: 'GetStreamingDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution/{Id}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          StreamingDistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              S3Origin: {
                type: 'structure',
                members: {
                  DomainName: {
                  },
                  OriginAccessIdentity: {
                  }
                }
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              }
            }
          }
        }
      }
    },
    getStreamingDistributionConfig: {
      name: 'GetStreamingDistributionConfig2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution/{Id}/config',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Id: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          CallerReference: {
          },
          S3Origin: {
            type: 'structure',
            members: {
              DomainName: {
              },
              OriginAccessIdentity: {
              }
            }
          },
          Aliases: {
            type: 'structure',
            members: {
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  name: 'CNAME'
                }
              }
            }
          },
          Comment: {
          },
          Logging: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Bucket: {
              },
              Prefix: {
              }
            }
          },
          TrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  name: 'AwsAccountNumber'
                }
              }
            }
          },
          PriceClass: {
          },
          Enabled: {
            type: 'boolean'
          }
        }
      }
    },
    listCloudFrontOriginAccessIdentities: {
      name: 'ListCloudFrontOriginAccessIdentities2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront?Marker={Marker}&MaxItems={MaxItems}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          NextMarker: {
          },
          MaxItems: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Quantity: {
            type: 'integer'
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                S3CanonicalUserId: {
                },
                Comment: {
                }
              },
              name: 'CloudFrontOriginAccessIdentitySummary'
            }
          }
        }
      }
    },
    listDistributions: {
      name: 'ListDistributions2013_11_11',
      http: {
        uri: '/2013-11-11/distribution?Marker={Marker}&MaxItems={MaxItems}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          NextMarker: {
          },
          MaxItems: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Quantity: {
            type: 'integer'
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                Status: {
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                DomainName: {
                },
                Aliases: {
                  type: 'structure',
                  members: {
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        name: 'CNAME'
                      }
                    }
                  }
                },
                Origins: {
                  type: 'structure',
                  members: {
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          Id: {
                          },
                          DomainName: {
                          },
                          S3OriginConfig: {
                            type: 'structure',
                            members: {
                              OriginAccessIdentity: {
                              }
                            }
                          },
                          CustomOriginConfig: {
                            type: 'structure',
                            members: {
                              HTTPPort: {
                                type: 'integer'
                              },
                              HTTPSPort: {
                                type: 'integer'
                              },
                              OriginProtocolPolicy: {
                              }
                            }
                          }
                        },
                        name: 'Origin'
                      }
                    }
                  }
                },
                DefaultCacheBehavior: {
                  type: 'structure',
                  members: {
                    TargetOriginId: {
                    },
                    ForwardedValues: {
                      type: 'structure',
                      members: {
                        QueryString: {
                          type: 'boolean'
                        },
                        Cookies: {
                          type: 'structure',
                          members: {
                            Forward: {
                            },
                            WhitelistedNames: {
                              type: 'structure',
                              members: {
                                Quantity: {
                                  type: 'integer'
                                },
                                Items: {
                                  type: 'list',
                                  members: {
                                    name: 'Name'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    TrustedSigners: {
                      type: 'structure',
                      members: {
                        Enabled: {
                          type: 'boolean'
                        },
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'AwsAccountNumber'
                          }
                        }
                      }
                    },
                    ViewerProtocolPolicy: {
                    },
                    MinTTL: {
                      type: 'integer'
                    },
                    AllowedMethods: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'Method'
                          }
                        }
                      }
                    }
                  }
                },
                CacheBehaviors: {
                  type: 'structure',
                  members: {
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          PathPattern: {
                          },
                          TargetOriginId: {
                          },
                          ForwardedValues: {
                            type: 'structure',
                            members: {
                              QueryString: {
                                type: 'boolean'
                              },
                              Cookies: {
                                type: 'structure',
                                members: {
                                  Forward: {
                                  },
                                  WhitelistedNames: {
                                    type: 'structure',
                                    members: {
                                      Quantity: {
                                        type: 'integer'
                                      },
                                      Items: {
                                        type: 'list',
                                        members: {
                                          name: 'Name'
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          TrustedSigners: {
                            type: 'structure',
                            members: {
                              Enabled: {
                                type: 'boolean'
                              },
                              Quantity: {
                                type: 'integer'
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'AwsAccountNumber'
                                }
                              }
                            }
                          },
                          ViewerProtocolPolicy: {
                          },
                          MinTTL: {
                            type: 'integer'
                          },
                          AllowedMethods: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer'
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Method'
                                }
                              }
                            }
                          }
                        },
                        name: 'CacheBehavior'
                      }
                    }
                  }
                },
                CustomErrorResponses: {
                  type: 'structure',
                  members: {
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          ErrorCode: {
                            type: 'integer'
                          },
                          ResponsePagePath: {
                          },
                          ResponseCode: {
                          },
                          ErrorCachingMinTTL: {
                            type: 'integer'
                          }
                        },
                        name: 'CustomErrorResponse'
                      }
                    }
                  }
                },
                Comment: {
                },
                PriceClass: {
                },
                Enabled: {
                  type: 'boolean'
                },
                ViewerCertificate: {
                  type: 'structure',
                  members: {
                    IAMCertificateId: {
                    },
                    CloudFrontDefaultCertificate: {
                      type: 'boolean'
                    }
                  }
                },
                Restrictions: {
                  type: 'structure',
                  members: {
                    GeoRestriction: {
                      type: 'structure',
                      members: {
                        RestrictionType: {
                        },
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'Location'
                          }
                        }
                      }
                    }
                  }
                }
              },
              name: 'DistributionSummary'
            }
          }
        }
      }
    },
    listInvalidations: {
      name: 'ListInvalidations2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{DistributionId}/invalidation?Marker={Marker}&MaxItems={MaxItems}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          DistributionId: {
            required: true,
            location: 'uri'
          },
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          NextMarker: {
          },
          MaxItems: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Quantity: {
            type: 'integer'
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                CreateTime: {
                  type: 'timestamp'
                },
                Status: {
                }
              },
              name: 'InvalidationSummary'
            }
          }
        }
      }
    },
    listStreamingDistributions: {
      name: 'ListStreamingDistributions2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution?Marker={Marker}&MaxItems={MaxItems}',
        method: 'GET'
      },
      input: {
        type: 'structure',
        members: {
          Marker: {
            location: 'uri'
          },
          MaxItems: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Marker: {
          },
          NextMarker: {
          },
          MaxItems: {
            type: 'integer'
          },
          IsTruncated: {
            type: 'boolean'
          },
          Quantity: {
            type: 'integer'
          },
          Items: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Id: {
                },
                Status: {
                },
                LastModifiedTime: {
                  type: 'timestamp'
                },
                DomainName: {
                },
                S3Origin: {
                  type: 'structure',
                  members: {
                    DomainName: {
                    },
                    OriginAccessIdentity: {
                    }
                  }
                },
                Aliases: {
                  type: 'structure',
                  members: {
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        name: 'CNAME'
                      }
                    }
                  }
                },
                TrustedSigners: {
                  type: 'structure',
                  members: {
                    Enabled: {
                      type: 'boolean'
                    },
                    Quantity: {
                      type: 'integer'
                    },
                    Items: {
                      type: 'list',
                      members: {
                        name: 'AwsAccountNumber'
                      }
                    }
                  }
                },
                Comment: {
                },
                PriceClass: {
                },
                Enabled: {
                  type: 'boolean'
                }
              },
              name: 'StreamingDistributionSummary'
            }
          }
        }
      }
    },
    updateCloudFrontOriginAccessIdentity: {
      name: 'UpdateCloudFrontOriginAccessIdentity2013_11_11',
      http: {
        uri: '/2013-11-11/origin-access-identity/cloudfront/{Id}/config',
        method: 'PUT'
      },
      input: {
        payload: 'CloudFrontOriginAccessIdentityConfig',
        type: 'structure',
        members: {
          CloudFrontOriginAccessIdentityConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              Comment: {
                required: true
              }
            },
            required: true
          },
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          S3CanonicalUserId: {
          },
          CloudFrontOriginAccessIdentityConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Comment: {
              }
            }
          }
        }
      }
    },
    updateDistribution: {
      name: 'UpdateDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/distribution/{Id}/config',
        method: 'PUT'
      },
      input: {
        payload: 'DistributionConfig',
        type: 'structure',
        members: {
          DistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                },
                required: true
              },
              DefaultRootObject: {
                required: true
              },
              Origins: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Id: {
                          required: true
                        },
                        DomainName: {
                          required: true
                        },
                        S3OriginConfig: {
                          type: 'structure',
                          members: {
                            OriginAccessIdentity: {
                              required: true
                            }
                          }
                        },
                        CustomOriginConfig: {
                          type: 'structure',
                          members: {
                            HTTPPort: {
                              type: 'integer',
                              required: true
                            },
                            HTTPSPort: {
                              type: 'integer',
                              required: true
                            },
                            OriginProtocolPolicy: {
                              required: true
                            }
                          }
                        }
                      },
                      name: 'Origin'
                    }
                  }
                },
                required: true
              },
              DefaultCacheBehavior: {
                type: 'structure',
                members: {
                  TargetOriginId: {
                    required: true
                  },
                  ForwardedValues: {
                    type: 'structure',
                    members: {
                      QueryString: {
                        type: 'boolean',
                        required: true
                      },
                      Cookies: {
                        type: 'structure',
                        members: {
                          Forward: {
                            required: true
                          },
                          WhitelistedNames: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer',
                                required: true
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Name'
                                }
                              }
                            }
                          }
                        },
                        required: true
                      }
                    },
                    required: true
                  },
                  TrustedSigners: {
                    type: 'structure',
                    members: {
                      Enabled: {
                        type: 'boolean',
                        required: true
                      },
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'AwsAccountNumber'
                        }
                      }
                    },
                    required: true
                  },
                  ViewerProtocolPolicy: {
                    required: true
                  },
                  MinTTL: {
                    type: 'integer',
                    required: true
                  },
                  AllowedMethods: {
                    type: 'structure',
                    members: {
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Method'
                        }
                      }
                    }
                  }
                },
                required: true
              },
              CacheBehaviors: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        PathPattern: {
                          required: true
                        },
                        TargetOriginId: {
                          required: true
                        },
                        ForwardedValues: {
                          type: 'structure',
                          members: {
                            QueryString: {
                              type: 'boolean',
                              required: true
                            },
                            Cookies: {
                              type: 'structure',
                              members: {
                                Forward: {
                                  required: true
                                },
                                WhitelistedNames: {
                                  type: 'structure',
                                  members: {
                                    Quantity: {
                                      type: 'integer',
                                      required: true
                                    },
                                    Items: {
                                      type: 'list',
                                      members: {
                                        name: 'Name'
                                      }
                                    }
                                  }
                                }
                              },
                              required: true
                            }
                          },
                          required: true
                        },
                        TrustedSigners: {
                          type: 'structure',
                          members: {
                            Enabled: {
                              type: 'boolean',
                              required: true
                            },
                            Quantity: {
                              type: 'integer',
                              required: true
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'AwsAccountNumber'
                              }
                            }
                          },
                          required: true
                        },
                        ViewerProtocolPolicy: {
                          required: true
                        },
                        MinTTL: {
                          type: 'integer',
                          required: true
                        },
                        AllowedMethods: {
                          type: 'structure',
                          members: {
                            Quantity: {
                              type: 'integer',
                              required: true
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'Method'
                              }
                            }
                          }
                        }
                      },
                      name: 'CacheBehavior'
                    }
                  }
                },
                required: true
              },
              CustomErrorResponses: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        ErrorCode: {
                          type: 'integer',
                          required: true
                        },
                        ResponsePagePath: {
                        },
                        ResponseCode: {
                        },
                        ErrorCachingMinTTL: {
                          type: 'integer'
                        }
                      },
                      name: 'CustomErrorResponse'
                    }
                  }
                }
              },
              Comment: {
                required: true
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  IncludeCookies: {
                    type: 'boolean',
                    required: true
                  },
                  Bucket: {
                    required: true
                  },
                  Prefix: {
                    required: true
                  }
                },
                required: true
              },
              PriceClass: {
                required: true
              },
              Enabled: {
                type: 'boolean',
                required: true
              },
              ViewerCertificate: {
                type: 'structure',
                members: {
                  IAMCertificateId: {
                  },
                  CloudFrontDefaultCertificate: {
                    type: 'boolean'
                  }
                }
              },
              Restrictions: {
                type: 'structure',
                members: {
                  GeoRestriction: {
                    type: 'structure',
                    members: {
                      RestrictionType: {
                        required: true
                      },
                      Quantity: {
                        type: 'integer',
                        required: true
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Location'
                        }
                      }
                    },
                    required: true
                  }
                }
              }
            },
            required: true
          },
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          InProgressInvalidationBatches: {
            type: 'integer'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          DistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              DefaultRootObject: {
              },
              Origins: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        Id: {
                        },
                        DomainName: {
                        },
                        S3OriginConfig: {
                          type: 'structure',
                          members: {
                            OriginAccessIdentity: {
                            }
                          }
                        },
                        CustomOriginConfig: {
                          type: 'structure',
                          members: {
                            HTTPPort: {
                              type: 'integer'
                            },
                            HTTPSPort: {
                              type: 'integer'
                            },
                            OriginProtocolPolicy: {
                            }
                          }
                        }
                      },
                      name: 'Origin'
                    }
                  }
                }
              },
              DefaultCacheBehavior: {
                type: 'structure',
                members: {
                  TargetOriginId: {
                  },
                  ForwardedValues: {
                    type: 'structure',
                    members: {
                      QueryString: {
                        type: 'boolean'
                      },
                      Cookies: {
                        type: 'structure',
                        members: {
                          Forward: {
                          },
                          WhitelistedNames: {
                            type: 'structure',
                            members: {
                              Quantity: {
                                type: 'integer'
                              },
                              Items: {
                                type: 'list',
                                members: {
                                  name: 'Name'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  TrustedSigners: {
                    type: 'structure',
                    members: {
                      Enabled: {
                        type: 'boolean'
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'AwsAccountNumber'
                        }
                      }
                    }
                  },
                  ViewerProtocolPolicy: {
                  },
                  MinTTL: {
                    type: 'integer'
                  },
                  AllowedMethods: {
                    type: 'structure',
                    members: {
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Method'
                        }
                      }
                    }
                  }
                }
              },
              CacheBehaviors: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        PathPattern: {
                        },
                        TargetOriginId: {
                        },
                        ForwardedValues: {
                          type: 'structure',
                          members: {
                            QueryString: {
                              type: 'boolean'
                            },
                            Cookies: {
                              type: 'structure',
                              members: {
                                Forward: {
                                },
                                WhitelistedNames: {
                                  type: 'structure',
                                  members: {
                                    Quantity: {
                                      type: 'integer'
                                    },
                                    Items: {
                                      type: 'list',
                                      members: {
                                        name: 'Name'
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        TrustedSigners: {
                          type: 'structure',
                          members: {
                            Enabled: {
                              type: 'boolean'
                            },
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'AwsAccountNumber'
                              }
                            }
                          }
                        },
                        ViewerProtocolPolicy: {
                        },
                        MinTTL: {
                          type: 'integer'
                        },
                        AllowedMethods: {
                          type: 'structure',
                          members: {
                            Quantity: {
                              type: 'integer'
                            },
                            Items: {
                              type: 'list',
                              members: {
                                name: 'Method'
                              }
                            }
                          }
                        }
                      },
                      name: 'CacheBehavior'
                    }
                  }
                }
              },
              CustomErrorResponses: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      type: 'structure',
                      members: {
                        ErrorCode: {
                          type: 'integer'
                        },
                        ResponsePagePath: {
                        },
                        ResponseCode: {
                        },
                        ErrorCachingMinTTL: {
                          type: 'integer'
                        }
                      },
                      name: 'CustomErrorResponse'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  IncludeCookies: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              },
              ViewerCertificate: {
                type: 'structure',
                members: {
                  IAMCertificateId: {
                  },
                  CloudFrontDefaultCertificate: {
                    type: 'boolean'
                  }
                }
              },
              Restrictions: {
                type: 'structure',
                members: {
                  GeoRestriction: {
                    type: 'structure',
                    members: {
                      RestrictionType: {
                      },
                      Quantity: {
                        type: 'integer'
                      },
                      Items: {
                        type: 'list',
                        members: {
                          name: 'Location'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    updateStreamingDistribution: {
      name: 'UpdateStreamingDistribution2013_11_11',
      http: {
        uri: '/2013-11-11/streaming-distribution/{Id}/config',
        method: 'PUT'
      },
      input: {
        payload: 'StreamingDistributionConfig',
        type: 'structure',
        members: {
          StreamingDistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
                required: true
              },
              S3Origin: {
                type: 'structure',
                members: {
                  DomainName: {
                    required: true
                  },
                  OriginAccessIdentity: {
                    required: true
                  }
                },
                required: true
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                },
                required: true
              },
              Comment: {
                required: true
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  Bucket: {
                    required: true
                  },
                  Prefix: {
                    required: true
                  }
                },
                required: true
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean',
                    required: true
                  },
                  Quantity: {
                    type: 'integer',
                    required: true
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                },
                required: true
              },
              PriceClass: {
                required: true
              },
              Enabled: {
                type: 'boolean',
                required: true
              }
            },
            required: true
          },
          Id: {
            location: 'uri'
          },
          IfMatch: {
            location: 'header',
            name: 'If-Match'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          ETag: {
            location: 'header',
            name: 'ETag'
          },
          Id: {
          },
          Status: {
          },
          LastModifiedTime: {
            type: 'timestamp'
          },
          DomainName: {
          },
          ActiveTrustedSigners: {
            type: 'structure',
            members: {
              Enabled: {
                type: 'boolean'
              },
              Quantity: {
                type: 'integer'
              },
              Items: {
                type: 'list',
                members: {
                  type: 'structure',
                  members: {
                    AwsAccountNumber: {
                    },
                    KeyPairIds: {
                      type: 'structure',
                      members: {
                        Quantity: {
                          type: 'integer'
                        },
                        Items: {
                          type: 'list',
                          members: {
                            name: 'KeyPairId'
                          }
                        }
                      }
                    }
                  },
                  name: 'Signer'
                }
              }
            }
          },
          StreamingDistributionConfig: {
            type: 'structure',
            members: {
              CallerReference: {
              },
              S3Origin: {
                type: 'structure',
                members: {
                  DomainName: {
                  },
                  OriginAccessIdentity: {
                  }
                }
              },
              Aliases: {
                type: 'structure',
                members: {
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'CNAME'
                    }
                  }
                }
              },
              Comment: {
              },
              Logging: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Bucket: {
                  },
                  Prefix: {
                  }
                }
              },
              TrustedSigners: {
                type: 'structure',
                members: {
                  Enabled: {
                    type: 'boolean'
                  },
                  Quantity: {
                    type: 'integer'
                  },
                  Items: {
                    type: 'list',
                    members: {
                      name: 'AwsAccountNumber'
                    }
                  }
                }
              },
              PriceClass: {
              },
              Enabled: {
                type: 'boolean'
              }
            }
          }
        }
      }
    }
  },
  pagination: {
    listCloudFrontOriginAccessIdentities: {
      inputToken: 'Marker',
      outputToken: 'NextMarker',
      moreResults: 'IsTruncated',
      resultKey: 'Items'
    },
    listDistributions: {
      inputToken: 'Marker',
      outputToken: 'NextMarker',
      moreResults: 'IsTruncated',
      resultKey: 'Items'
    },
    listInvalidations: {
      inputToken: 'Marker',
      outputToken: 'NextMarker',
      moreResults: 'IsTruncated',
      resultKey: 'Items'
    },
    listStreamingDistributions: {
      inputToken: 'Marker',
      outputToken: 'NextMarker',
      moreResults: 'IsTruncated',
      resultKey: 'Items'
    }
  }
};
