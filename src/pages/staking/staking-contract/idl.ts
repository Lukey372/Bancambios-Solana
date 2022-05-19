export type BxStaking = {
  version: '0.1.0';
  name: 'bx_staking';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPoolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bxTokenMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakingTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakingTokenMintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'earlyUnstakeFee';
          type: 'u8';
        },
        {
          name: 'rewardPerSecond';
          type: 'u64';
        },
        {
          name: 'lockupTime';
          type: 'u64';
        },
      ];
    },
    {
      name: 'increasePool';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakingTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bxTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'decreasePool';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPoolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakingTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bxTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'claimFees';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPoolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bxTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'stake';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakingTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'stakingTokenMintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userStakingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userBxTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userStakeInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'unstake';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenPoolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'stakingTokenMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userStakingTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userBxTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userStakeInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
      ];
    },
    {
      name: 'updateParams';
      accounts: [
        {
          name: 'programState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'earlyUnstakeFee';
          type: {
            option: 'u8';
          };
        },
        {
          name: 'rewardPerSecond';
          type: {
            option: 'u64';
          };
        },
        {
          name: 'lockupTime';
          type: {
            option: 'u64';
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'programState';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'publicKey';
          },
          {
            name: 'earlyUnstakeFee';
            type: 'u8';
          },
          {
            name: 'feePool';
            type: 'u64';
          },
          {
            name: 'rewardPerSecond';
            type: 'u64';
          },
          {
            name: 'price';
            type: {
              defined: 'Decimal';
            };
          },
          {
            name: 'defaultPrice';
            type: {
              defined: 'Decimal';
            };
          },
          {
            name: 'totalStakedTokens';
            type: 'u64';
          },
          {
            name: 'lockedRewards';
            type: 'u64';
          },
          {
            name: 'lockupTime';
            type: 'u64';
          },
          {
            name: 'lastUpdate';
            type: {
              defined: 'UnixTimestamp';
            };
          },
        ];
      };
    },
    {
      name: 'stakeInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakeTime';
            type: {
              defined: 'UnixTimestamp';
            };
          },
          {
            name: 'bump';
            type: 'u8';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'AmountTooSmall';
      msg: 'Staking/unstaking amount is too small';
    },
    {
      code: 6001;
      name: 'ArithmeticError';
      msg: 'An overflow/underflow occured';
    },
    {
      code: 6002;
      name: 'InsuficientBalance';
      msg: 'Not enough tokens to proceed';
    },
    {
      code: 6003;
      name: 'UnauthorizedOperation';
      msg: 'Unauthorized operation';
    },
    {
      code: 6004;
      name: 'EmptyFeePool';
      msg: 'Fee pool is empty';
    },
    {
      code: 6005;
      name: 'InvalidParamValue';
      msg: 'Invalid parameter value';
    },
  ];
  types: [
    {
      name: 'Decimal';
      type: {
        kind: 'struct';
        fields: [
          { name: 'flags'; type: 'u32' },
          { name: 'hi'; type: 'u32' },
          { name: 'lo'; type: 'u32' },
          { name: 'mid'; type: 'u32' },
        ];
      };
    },
    {
      name: 'UnixTimestamp';
      type: {
        kind: 'struct';
        fields: [{ name: 'value'; type: 'i64' }];
      };
    },
  ];
};

export const IDL: BxStaking = {
  version: '0.1.0',
  name: 'bx_staking',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPoolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bxTokenMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakingTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakingTokenMintAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'earlyUnstakeFee',
          type: 'u8',
        },
        {
          name: 'rewardPerSecond',
          type: 'u64',
        },
        {
          name: 'lockupTime',
          type: 'u64',
        },
      ],
    },
    {
      name: 'increasePool',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakingTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bxTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'decreasePool',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPoolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakingTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bxTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'claimFees',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPoolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bxTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'stake',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakingTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'stakingTokenMintAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userStakingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userBxTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userStakeInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'unstake',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenPoolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'stakingTokenMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userStakingTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userBxTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userStakeInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateParams',
      accounts: [
        {
          name: 'programState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'earlyUnstakeFee',
          type: {
            option: 'u8',
          },
        },
        {
          name: 'rewardPerSecond',
          type: {
            option: 'u64',
          },
        },
        {
          name: 'lockupTime',
          type: {
            option: 'u64',
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'programState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'earlyUnstakeFee',
            type: 'u8',
          },
          {
            name: 'feePool',
            type: 'u64',
          },
          {
            name: 'rewardPerSecond',
            type: 'u64',
          },
          {
            name: 'price',
            type: {
              defined: 'Decimal',
            },
          },
          {
            name: 'defaultPrice',
            type: {
              defined: 'Decimal',
            },
          },
          {
            name: 'totalStakedTokens',
            type: 'u64',
          },
          {
            name: 'lockedRewards',
            type: 'u64',
          },
          {
            name: 'lockupTime',
            type: 'u64',
          },
          {
            name: 'lastUpdate',
            type: {
              defined: 'UnixTimestamp',
            },
          },
        ],
      },
    },
    {
      name: 'stakeInfo',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakeTime',
            type: {
              defined: 'UnixTimestamp',
            },
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'AmountTooSmall',
      msg: 'Staking/unstaking amount is too small',
    },
    {
      code: 6001,
      name: 'ArithmeticError',
      msg: 'An overflow/underflow occured',
    },
    {
      code: 6002,
      name: 'InsuficientBalance',
      msg: 'Not enough tokens to proceed',
    },
    {
      code: 6003,
      name: 'UnauthorizedOperation',
      msg: 'Unauthorized operation',
    },
    {
      code: 6004,
      name: 'EmptyFeePool',
      msg: 'Fee pool is empty',
    },
    {
      code: 6005,
      name: 'InvalidParamValue',
      msg: 'Invalid parameter value',
    },
  ],
  types: [
    {
      name: 'Decimal',
      type: {
        kind: 'struct',
        fields: [
          { name: 'flags', type: 'u32' },
          { name: 'hi', type: 'u32' },
          { name: 'lo', type: 'u32' },
          { name: 'mid', type: 'u32' },
        ],
      },
    },
    {
      name: 'UnixTimestamp',
      type: {
        kind: 'struct',
        fields: [{ name: 'value', type: 'i64' }],
      },
    },
  ],
};
